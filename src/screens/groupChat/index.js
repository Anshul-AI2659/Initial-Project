/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import {
  GiftedChat,
  InputToolbar,
  Message,
  Send,
} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import {Icons} from '../../assets';
import CustomAudioMessage from '../../components/customAudioMessage';
import ImagePreviewModal from '../../components/imagePreviewModal';
import ChatModalLongPress from '../../components/reactionModal';
import {styles} from './styles';

const GroupChat = () => {
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
  const [playingMessageId, setPlayingMessageId] = useState(null);
  const [globalPlayer, setGlobalPlayer] = useState(null);
  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const userId = await AsyncStorage.getItem('USERID');
        const userName = await AsyncStorage.getItem('NAME');
        if (userId && userName) {
          setCurrentUser({userId, name: userName});
        }
      } catch (error) {
        console.error('Error fetching user data from AsyncStorage:', error);
      }
    };

    getCurrentUser();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('GroupChats')
      .doc(route.params.groupId) // Fetch the correct group by groupId
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const allMessages = querySnapshot.docs.map(item => {
          const data = item.data();
          return {
            ...data,
            _id: item.id,
            createdAt: data.createdAt?.toDate() || new Date(),
            sendByName: data.sendByName || 'Unknown',
          };
        });
        setMessageList(allMessages);
      });

    return () => subscriber();
  }, [route.params.groupId]);

  const onSend = useCallback(
    async (messages = []) => {
      const msg = messages[0];
      const myMsg = {
        ...msg,
        sendBy: currentUser,
        sendByName: currentUser.name,
        createdAt: new Date(), // Use actual Date for immediate display
      };

      setMessageList(previousMessages =>
        GiftedChat.append(previousMessages, myMsg),
      );

      const groupId = route.params.groupId;

      try {
        await firestore()
          .collection('GroupChats')
          .doc(groupId)
          .collection('messages')
          .add({
            ...myMsg,
            createdAt: firestore.FieldValue.serverTimestamp(), // Correct syntax for Firestore
          });
      } catch (error) {
        console.error('Error sending message to Firestore:', error);
      }
    },
    [route.params.groupId, currentUser],
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

      const path = `${RNFS.DocumentDirectoryPath}/recordedAudio.m4a`;
      console.log('Recording to path:', path);

      await audioRecorderPlayer.startRecorder(path);

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

      const fileExists = await RNFS.exists(path);
      if (!fileExists) {
        console.log('File not found at path:', path);
        return;
      }

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
    const audioMsg = {
      _id: `${new Date().getTime()}-${route.params.userId}`,
      createdAt: firestore.FieldValue.serverTimestamp(),
      sendBy: currentUser,
      groupId: route.params.groupId,
      audio: base64Audio,
      user: {
        _id: currentUser.userId,
      },
    };

    setMessageList(previousMessages =>
      GiftedChat.append(previousMessages, audioMsg),
    );

    firestore()
      .collection('GroupChats')
      .doc(route.params.groupId)
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
      await firestore()
        .collection('GroupChats')
        .doc(route.params.groupId)
        .collection('messages')
        .doc(messageId)
        .delete();

      setMessageList(prevMessages =>
        prevMessages.filter(msg => msg._id !== messageId),
      );
    } catch (error) {
      console.log('Error deleting message:', error);
    }
  };

  const showDeleteAlert = messageId => {
    Alert.alert(
      'Delete Message',
      'Are you sure you want to delete this message?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => deleteMessage(messageId),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  const handlelongPress = (context, currentMessage) => {
    setSelectedMessageId(currentMessage._id);
    setModalVisible(true);
  };

  const handleReactionSelect = (messageId, reaction) => {
    if (messageId) {
      const updatedMessages = messageList.map(msg => {
        if (msg._id === messageId) {
          return {
            ...msg,
            emoji: reaction?.emoji,
          };
        }
        return msg;
      });

      setMessageList(updatedMessages);

      const updatedMessage = updatedMessages.find(msg => msg._id === messageId);

      if (updatedMessage) {
        firestore()
          .collection('GroupChats')
          .doc(route.params.groupId)
          .collection('messages')
          .doc(messageId)
          .update({
            emoji: updatedMessage.emoji,
          })
          .then(() => {
            console.log('Emoji reaction added to Firestore for group chat');
          })
          .catch(error => {
            console.error('Error updating Firestore for group chat:', error);
          });
      }
    }
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
            createdAt: firestore.FieldValue.serverTimestamp(),
            user: {
              _id: route.params.userId,
              name: route.params.userName,
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
  const fetchGroupMembers = async () => {
    try {
      const groupId = route.params.groupId;
      const groupDoc = await firestore()
        .collection('GroupChats')
        .doc(groupId)
        .get();

      if (groupDoc.exists) {
        const members = groupDoc.data().members || [];
        setGroupMembers(members);
        toggleModal(); // Show the modal after fetching members
      } else {
        console.error('Group not found!');
      }
    } catch (error) {
      console.error('Error fetching group members:', error);
    }
  };

  // const renderMessageAudio = props => {
  //   if (props.currentMessage.audio) {
  //     return <CustomAudioMessage {...props} />;
  //   }
  //   return <Bubble {...props} />;
  // };
  const stopCurrentAudio = async () => {
    if (globalPlayer) {
      console.log('Stopping current audio...');
      await globalPlayer.stopPlayer(); // Stop the currently playing audio
      setGlobalPlayer(null);
    }
    setPlayingMessageId(null);
  };

  const playPauseAudio = async currentMessage => {
    try {
      console.log(
        'Audio play/pause clicked. Current isPlaying:',
        playingMessageId === currentMessage._id,
      );

      if (playingMessageId && playingMessageId !== currentMessage._id) {
        console.log('Another audio is playing. Stopping it first...');
        await stopCurrentAudio();
      }

      if (playingMessageId !== currentMessage._id) {
        console.log('Starting audio playback...');
        const path = `${RNFS.DocumentDirectoryPath}/tempAudio_${currentMessage._id}.m4a`;
        await RNFS.writeFile(path, currentMessage.audio, 'base64');

        console.log('Playing new audio from path:', path);
        const player = audioRecorderPlayer;
        setGlobalPlayer(player);
        await player.startPlayer(path);

        player.addPlayBackListener(e => {
          console.log(
            'Playback position:',
            e.currentPosition,
            'Duration:',
            e.duration,
          );
          if (e.currentPosition === e.duration) {
            console.log('Audio finished playing');
            stopCurrentAudio();
          }
        });

        setPlayingMessageId(currentMessage._id);
      } else {
        console.log('Pausing current audio');
        await globalPlayer.pausePlayer();
        setPlayingMessageId(null);
      }
    } catch (error) {
      console.error('Error controlling audio playback:', error);
    }
  };

  const renderMessageAudio = props => {
    const {currentMessage, user} = props;
    const isSender = currentMessage?.user._id === user._id;
    return (
      <CustomAudioMessage
        {...props}
        playingMessageId={playingMessageId}
        onPlayPause={() => playPauseAudio(props.currentMessage)}
        isSender={isSender}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Icons.back} style={styles.backIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userInfoTextContainer}
            onPress={fetchGroupMembers}>
            <Text style={styles.name}>{route.params.groupName}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate('VoiceCall')}}>
            <Image source={Icons.telephone} style={styles.telephoneIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Icons.video} style={styles.videoIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messageList}
        onSend={messages => onSend(messages)}
        placeholder="Message..."
        user={{_id: currentUser?.userId}}
        renderInputToolbar={props => (
          <View style={{marginBottom: 20}}>
            <InputToolbar containerStyle={styles.inputToolbar} {...props} />
          </View>
        )}
        text={inputText}
        onInputTextChanged={text => setInputText(text)}
        listViewProps={{showsVerticalScrollIndicator: false}}
        // renderMessageAudio={renderMessageAudio}
        onLongPress={(context, message) => handlelongPress(context, message)}
        renderMessage={props => {
          const {currentMessage, user} = props;
          const isSender = currentMessage?.user._id === user._id;
          return (
            <View key={currentMessage._id} style={styles.messageWrapper}>
              {!isSender && currentMessage?.sendByName && (
                <Text style={styles.senderName}>
                  {currentMessage.sendByName}
                </Text>
              )}
              {/* <Message {...props} /> */}
              {!currentMessage.audio && <Message {...props} />}
              {currentMessage.audio && <View>{renderMessageAudio(props)}</View>}
              <View style={styles.emojiContainer}>
                {currentMessage?.emoji && (
                  <Text
                    style={
                      isSender
                        ? styles.senderEmojiOnBubble
                        : styles.receiverEmojiOnBubble
                    }>
                    {currentMessage?.emoji}
                  </Text>
                )}
              </View>
            </View>
          );
        }}
        renderSend={renderSend}
        renderMessageImage={renderMessageImage}
      />
      <ChatModalLongPress
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedMessageId={selectedMessageId}
        onEmojiSelect={(messageId, emoji) => {
          handleReactionSelect(messageId, emoji);
        }}
        onDelete={showDeleteAlert}
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
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.closeModalButton}
                onPress={toggleModal}>
                <Image source={Icons.close} style={styles.closeIcon} />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Group Members</Text>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={groupMembers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity>
                    <View style={styles.memberContainer}>
                      <Image
                        source={Icons.account}
                        style={styles.accountIcon}
                      />
                      <Text style={styles.memberName}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default GroupChat;
