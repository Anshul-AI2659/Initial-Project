/* eslint-disable react-native/no-inline-styles */

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Alert,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {
  GiftedChat,
  InputToolbar,
  Send,
  Message,
  Bubble,
} from 'react-native-gifted-chat';
import RNFS from 'react-native-fs';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import {SCREEN_WIDTH, vh, vw} from '../../utils/dimension';
import {Image} from 'react-native';
import {Icons} from '../../assets';
import ImagePreviewModal from '../../components/imagePreviewModal';
import CustomAudioMessage from '../../components/customAudioMessage';
import ChatModalLongPress from '../../components/reactionModal';
// import ReactionModal from '../../components/reactionModal';

const Chat = () => {
  const [messageList, setMessageList] = useState([]);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [inputText, setInputText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImagePreviewVisible, setIsImagePreviewVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState('0:00');
  const [isRecordingStopped, setIsRecordingStopped] = useState(false);
  const [audioBase64, setAudioBase64] = useState('');
  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;

  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(route.params.id + route.params.data.userId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const allMessages = querySnapshot.docs.map(item => {
          return {
            ...item.data(),
            _id: item.id,
            createdAt: item.data().createdAt,
          };
        });
        setMessageList(allMessages);
      });
    return () => subscriber();
  }, [route.params.data.userId, route.params.id]);

  const onSend = useCallback(
    async (messages = []) => {
      const msg = messages[0];
      const myMsg = {
        ...msg,
        sendBy: route.params.id,
        sendTo: route.params.data.userId,
        createdAt: Date.parse(msg.createdAt),
      };
      setMessageList(previousMessages =>
        GiftedChat.append(previousMessages, myMsg),
      );
      firestore()
        .collection('chats')
        .doc('' + route.params.id + route.params.data.userId)
        .collection('messages')
        .add(myMsg);
      firestore()
        .collection('chats')
        .doc('' + route.params.data.userId + route.params.id)
        .collection('messages')
        .add(myMsg);
    },
    [route.params.data.userId, route.params.id],
  );

  const startRecording = async () => {
    if (isRecording) {
      console.log('Recording is already in progress.');
      return;
    }

    try {
      console.log('Starting recording...');
      setIsRecording(true);
      setRecordingTime('00:00');
      setIsRecordingStopped(false);

      const path = `${RNFS.DocumentDirectoryPath}/recordedAudio.m4a`; // Use a writable path
      console.log('Recording to path:', path);

      await audioRecorderPlayer.startRecorder(path);
      console.log('Recording started successfully.');

      audioRecorderPlayer.addRecordBackListener(e => {
        const currentPosition = e.currentPosition;
        if (currentPosition && !isNaN(currentPosition)) {
          const minutes = Math.floor(currentPosition / 1000 / 60);
          const seconds = Math.floor((currentPosition / 1000) % 60);
          const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
            seconds,
          ).padStart(2, '0')}`;
          setRecordingTime(formattedTime);
        }
      });
    } catch (error) {
      console.error('Error starting recording:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    if (!isRecording || isRecordingStopped) {
      console.log('Recording is not in progress or already stopped.');
      return;
    }

    try {
      console.log('Stopping recording...');
      const path = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setIsRecording(false);
      setIsRecordingStopped(true);

      console.log('Recording stopped. File saved at path:', path);

      // Check if the recorded file exists
      const fileExists = await RNFS.exists(path);
      if (!fileExists) {
        console.log('File not found at path:', path);
        return;
      }

      // Read the recorded audio file as base64
      const audioData = await RNFS.readFile(path, 'base64');
      console.log(
        'Audio file read successfully, base64 data length:',
        audioData.length,
      );
      setAudioBase64(audioData);

      sendAudioMessage(audioData);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  const sendAudioMessage = base64Audio => {
    console.log('Base64 Audio:', base64Audio);
    const audioMsg = {
      id: `${new Date().getTime()}-${route.params.id}`, // Unique ID for the message (can combine timestamp and sender ID for uniqueness)
      createdAt: new Date().getTime(), // Timestamp in milliseconds
      sendBy: route.params.id, // Sender's user ID
      sendTo: route.params.data.userId, // Recipient's user ID
      audio: base64Audio,
      user: {
        _id: route.params.id,
      },
    };

    setMessageList(previousMessages =>
      GiftedChat.append(previousMessages, audioMsg),
    );
    firestore()
      .collection('chats')
      .doc(`${route.params.id + route.params.data.userId}`)
      .collection('messages')
      .add(audioMsg);
    firestore()
      .collection('chats')
      .doc(`${route.params.data.userId + route.params.id}`)
      .collection('messages')
      .add(audioMsg);
  };
  const handleMicPressIn = () => {
    console.log('Mic button pressed: Starting recording');
    startRecording();
  };

  const handleMicPressOut = () => {
    console.log('Mic button released: Stopping recording');
    stopRecording();
  };

  const deleteMessage = async messageId => {
    try {
      const senderMessagesRef = firestore()
        .collection('chats')
        .doc(route.params.id + route.params.data.userId)
        .collection('messages')
        .doc(messageId);

      const receiverMessagesRef = firestore()
        .collection('chats')
        .doc(route.params.data.userId + route.params.id)
        .collection('messages')
        .doc(messageId);

      await senderMessagesRef.delete();

      await receiverMessagesRef.delete();

      setMessageList(prevMessages =>
        prevMessages.filter(msg => msg._id !== messageId),
      );
    } catch (error) {
      console.log('Error deleting message:', error);
    }
  };

  // const showDeleteAlert = messageId => {
  //   Alert.alert(
  //     'Delete Message',
  //     'Are you sure you want to delete this message?',
  //     [
  //       {text: 'Cancel', style: 'cancel'},
  //       {
  //         text: 'Delete',
  //         onPress: () => deleteMessage(messageId),
  //         style: 'destructive',
  //       },
  //     ],
  //     {cancelable: true},
  //   );
  // };

const handlelongPress = (context, currentMessage) => {
  setSelectedMessageId(currentMessage._id);
    setModalVisible(true);
};

const renderMessageImage = props => {
      const {currentMessage} = props;
      if (currentMessage && currentMessage.image) {
        return (
          <TouchableOpacity
            onPress={() => {
              setSelectedImage(currentMessage.image);
              setIsImagePreviewVisible(true);
            }}>
            <Image
              source={{uri: currentMessage.image}}
              style={styles.chatImage}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };

  const renderSend = props => {
    const openGallery = async () => {
      try {
        const image = await ImagePicker.openPicker({
          mediaType: 'photo',
          includeBase64: true,
          cropping: true,
        });

        if (image && image.data) {
          const base64Image = `data:${image.mime};base64,${image.data}`;
          const imageMessage = {
            _id: Math.random().toString(36).substring(7),
            createdAt: new Date(),
            user: {
              _id: route.params.id,
            },
            image: base64Image,
          };

          props.onSend([imageMessage], true);
        }
      } catch (error) {
        console.log('Error occurred: ', error.message || error);
      }
    };
    return (
      <View style={styles.sendContainer}>
        {inputText.length === 0 ? (
          <View style={{flexDirection: 'row', paddingRight: 20}}>
            <TouchableOpacity
              onPressIn={handleMicPressIn}
              onPressOut={handleMicPressOut}>
              <Image source={Icons.mic} style={styles.sendIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery}>
              <Image source={Icons.gallery} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        ) : (
          <Send {...props} />
        )}
      </View>
    );
  };
  const renderMessageAudio = (props) => {
    if (props.currentMessage.audio) {
      return <CustomAudioMessage {...props} />;
    }
    return <Bubble {...props} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Icons.back} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.userInfoTextContainer}>
            <Text style={styles.name}>{route.params.data.name}</Text>
          </View>
        </View>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity>
            <Image source={Icons.telephone} style={styles.telephoneIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.video} style={styles.videoIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messageList}
        onSend={messages => onSend(messages)}
        placeholder="Message..."
        user={{_id: route.params.id}}
        renderInputToolbar={props => (
          <View style={{marginBottom: 20}}>
            <InputToolbar containerStyle={styles.inputToolbar} {...props} />
          </View>
        )}
        text={inputText}
        onInputTextChanged={text => setInputText(text)}
        listViewProps={{showsVerticalScrollIndicator: false}}
        renderMessageAudio={renderMessageAudio}
        onLongPress={(context,message)=>handlelongPress(context,message)}
        // renderMessage={props => {
        //   const {currentMessage} = props; // Access the current message

        //   return (
        //     <TouchableOpacity
        //       onLongPress={() => showDeleteAlert(currentMessage._id)} // Correctly passing currentMessage._id
        //     >
        //       <Message {...props} onLongPress={()=>{showDeleteAlert(currentMessage._id)}}/>{' '}
        //     </TouchableOpacity>
        //   );
        // }}
        renderSend={renderSend}
        renderMessageImage={renderMessageImage}
      />
      <ChatModalLongPress
        visible={modalVisible}
        onClose={() => setModalVisible(false)}  // Pass the onClose function to close the modal
        selectedMessageId={selectedMessageId}
        onEmojiSelect={(messageId, emoji) => console.log(messageId, emoji)}  // Emoji selection callback
        onDelete={deleteMessage}  // Pass deleteMessage function
      />

      <ImagePreviewModal
        visible={isImagePreviewVisible}
        image={selectedImage}
        onClose={() => setIsImagePreviewVisible(false)}
      />
      {isRecording && (
        <View style={{position: 'absolute', bottom: 30, left: 20}}>
          <Text style={{fontSize: 20, color: 'red'}}>{recordingTime}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Chat;

// const Chat = () => {
//   const [messageList, setMessageList] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isImagePreviewVisible, setIsImagePreviewVisible] = useState(false);
//   const [isReactionModalVisible, setIsReactionModalVisible] = useState(false);
//   const [selectedMessage, setSelectedMessage] = useState(null);
//   const route = useRoute();
//   const navigation = useNavigation();
//   const db = getFirestore();

//   useEffect(() => {
//     const chatDocId = route.params.id + route.params.data.userId;
//     const reverseChatDocId = route.params.data.userId + route.params.id;

//     const q = query(
//       collection(db, 'chats', chatDocId, 'messages'),
//       orderBy('createdAt', 'desc'),
//     );
//     const unsubscribeMessages = onSnapshot(q, querySnapshot => {
//       const allMessages = querySnapshot.docs.map(doc => ({
//         _id: doc.id,
//         ...doc.data(),
//         createdAt: doc.data().createdAt,
//       }));
//       setMessageList(allMessages);
//     });
//     const typingDocRef = doc(db, 'chats', reverseChatDocId);
//     const unsubscribeTyping = onSnapshot(typingDocRef, docSnapshot => {
//       if (docSnapshot.exists) {
//         const typingData = docSnapshot.data().typing || false;
//         setIsTyping(typingData);
//       } else {
//         console.log('Typing document does not exist.');
//         setIsTyping(false);
//       }
//     });
//     return () => {
//       unsubscribeMessages();
//       unsubscribeTyping();
//     };
//   }, [route.params.data.userId, route.params.id, db]);
//   const onSend = useCallback(
//     async (messages = []) => {
//       const msg = messages[0];
//       const myMsg = {
//         ...msg,
//         sendBy: route.params.id,
//         sendTo: route.params.data.userId,
//         createdAt: Date.parse(msg.createdAt),
//         reaction: [],
//       };

//       setMessageList(previousMessages =>
//         GiftedChat.append(previousMessages, myMsg),
//       );

//       const chatDocId = route.params.id + route.params.data.userId;
//       const reverseChatDocId = route.params.data.userId + route.params.id;

//       await addDoc(collection(db, 'chats', chatDocId, 'messages'), myMsg);
//       await addDoc(
//         collection(db, 'chats', reverseChatDocId, 'messages'),
//         myMsg,
//       );

//       await updateDoc(doc(db, 'chats', chatDocId), {typing: false});
//       await updateDoc(doc(db, 'chats', reverseChatDocId), {typing: false});
//     },
//     [route.params.data.userId, route.params.id, db],
//   );

//   const handleTyping = async text => {
//     const chatDocId = route.params.id + route.params.data.userId;

//     if (text.length > 0) {
//       await setDoc(doc(db, 'chats', chatDocId), {typing: true}, {merge: true});
//     } else {
//       await setDoc(doc(db, 'chats', chatDocId), {typing: false}, {merge: true});
//     }
//   };

//   const addReactionToMessage = async (messageId, reaction) => {
//     const chatDocId = route.params.id + route.params.data.userId;
//     const messageRef = doc(db, 'chats', chatDocId, 'messages', messageId);
//     await updateDoc(messageRef, {
//       reaction,
//     });
//   };

//   const handleDeleteMessage = async messageId => {
//     try {
//       // Validate that route.params.id and route.params.data.userId exist
//       if (!route.params.id || !route.params.data.userId) {
//         throw new Error('Invalid chat ID or user ID');
//       }

//       const chatDocId = `${route.params.id}_${route.params.data.userId}`;

//       // Reference to the specific message document in Firestore
//       const messageRef = doc(db, 'chats', chatDocId, 'messages', messageId);

//       // Use Firestore batch for consistency
//       const batch = writeBatch(db);
//       batch.delete(messageRef);

//       await batch.commit(); // Execute the batch operation

//       // After successful deletion, filter the message from the messageList state
//       setMessageList(prevMessages =>
//         prevMessages.filter(message => message._id !== messageId),
//       );

//       console.log('Message deleted successfully');
//     } catch (error) {
//       console.error('Error deleting message:', error);
//     }
//   };
//   const renderBubble = props => {
//     const {currentMessage} = props;
//     return (
//       <View>
//         <Bubble
//           {...props}
//           onLongPress={() => {
//             Alert.alert(
//               'Delete Message',
//               'Are you sure you want to delete this message?',
//               [
//                 {text: 'Cancel', style: 'cancel'},
//                 {
//                   text: 'Delete',
//                   onPress: () => handleDeleteMessage(currentMessage._id),
//                 },
//               ],
//             );
//           }}
//         />
//         {currentMessage.reaction ? (
//           <Text style={styles.reactionText}>{currentMessage.reaction}</Text>
//         ) : null}
//       </View>
//     );
//   };

//   const renderSend = props => {
//     const handleSharePress = () => {
//       if (props.text && props.text.trim().length > 0) {
//         const message = {
//           _id: Math.random().toString(36).substring(7),
//           text: props.text,
//           createdAt: new Date(),
//           user: {
//             _id: route.params.id,
//           },
//         };
//         props.onSend([message], true);
//       }
//     };

//     const openGallery = async () => {
//       try {
//         const image = await ImagePicker.openPicker({
//           mediaType: 'photo',
//           includeBase64: true,
//           cropping: true,
//         });

//         if (image && image.data) {
//           const base64Image = `data:${image.mime};base64,${image.data}`;
//           const imageMessage = {
//             _id: Math.random().toString(36).substring(7),
//             createdAt: new Date(),
//             user: {
//               _id: route.params.id,
//             },
//             image: base64Image,
//           };

//           props.onSend([imageMessage], true);
//         }
//       } catch (error) {
//         console.log('Error occurred: ', error.message || error);
//       }
//     };

//     return (
//       <View style={styles.messageIconContainer}>
//         <TouchableOpacity style={styles.sendButton} onPress={handleSharePress}>
//           <Image source={Icons.share} style={styles.sendIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={openGallery}>
//           <Image source={Icons.chatGallery} style={styles.sendIcon} />
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderMessageImage = props => {
//     const {currentMessage} = props;
//     if (currentMessage && currentMessage.image) {
//       return (
//         <TouchableOpacity
//           onPress={() => {
//             setSelectedImage(currentMessage.image);
//             setIsImagePreviewVisible(true);
//           }}>
//           <Image
//             source={{uri: currentMessage.image}}
//             style={styles.chatImage}
//           />
//         </TouchableOpacity>
//       );
//     }
//     return null;
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.headerContainer}>
//         <View style={styles.userInfo}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={Icons.back} style={styles.backIcon} />
//           </TouchableOpacity>
//           <View style={styles.userInfoTextContainer}>
//             <Text style={styles.name}>{route.params.data.name}</Text>
//           </View>
//         </View>
//         <View style={styles.headerIconContainer}>
//           <TouchableOpacity>
//             <Image source={Icons.telephone} style={styles.telephoneIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={Icons.video} style={styles.videoIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <GiftedChat
//         messages={messageList}
//         onSend={messages => onSend(messages)}
//         user={{_id: route.params.id}}
//         renderInputToolbar={props => (
//           <InputToolbar
//             containerStyle={styles.inputToolbar}
//             {...props}
//             textInputProps={{
//               onChangeText: text => {
//                 handleTyping(text);
//                 props.onTextChanged(text);
//               },
//             }}
//           />
//         )}
//         listViewProps={{showsVerticalScrollIndicator: false}}
//         renderMessageImage={renderMessageImage}
//         renderBubble={renderBubble}
//         renderSend={renderSend}
//         isTyping={isTyping}
//       />
//       <ReactionModal
//         visible={isReactionModalVisible}
//         selectedMessage={selectedMessage}
//         onAddReaction={addReactionToMessage}
//         onClose={() => setIsReactionModalVisible(false)}
//       />
//       <ImagePreviewModal
//         visible={isImagePreviewVisible}
//         image={selectedImage}
//         onClose={() => setIsImagePreviewVisible(false)}
//       />
//     </SafeAreaView>
//   );
// };

// export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: vw(10),
    paddingBottom: vh(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: vw(26),
    height: vw(26),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoTextContainer: {
    marginLeft: vw(15),
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  headerIconContainer: {
    width: SCREEN_WIDTH / 3.8,
    flexDirection: 'row',
    padding: vh(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  telephoneIcon: {
    width: vw(23),
    height: vw(23),
    resizeMode: 'contain',
  },
  videoIcon: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  messageIconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  sendContainer: {
    alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: 'red',
  },
  sendIcon: {
    width: vw(22),
    height: vw(22),
    resizeMode: 'contain',
    marginLeft: vw(10),
  },

  inputToolbar: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  chatImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  reactionText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    position: 'relative',
  },
});
