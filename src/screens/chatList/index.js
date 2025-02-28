import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ChatModal from '../../components/chatModal';
import {Icons} from '../../assets';
import {styles} from './styles';
import CustomStatusBar from '../../components/statusBar';
import { SafeAreaView } from 'react-native-safe-area-context';

let id = '';

const ChatList = () => {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedGroupId, setSelectedGroupId] = useState(null); 
  const navigation = useNavigation();

  // Getting User Weather Group or Single User.
  const getUsers = async () => {
    try {
      setLoading(true);
      id = await AsyncStorage.getItem('USERID');
      const email = await AsyncStorage.getItem('EMAIL');
      let tempData = [];

      // Fetch individual users
      const userSnapshot = await firestore()
        .collection('users')
        .where('email', '!=', email)
        .get();

      if (userSnapshot.docs.length > 0) {
        for (const item of userSnapshot.docs) {
          let userData = item.data();
          console.log('User Data:', userData);

          // Fetching Last Message and Last Message Time.
          const lastMessageSnapshot = await firestore()
            .collection('chats')
            .doc(id + userData.userId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get();

          if (!lastMessageSnapshot.empty) {
            const lastMessageData = lastMessageSnapshot.docs[0].data();

            if (lastMessageData.image) {
              userData.lastMessage = '📷 Photo';
            } else if (lastMessageData.audio) {
              userData.lastMessage = '🔊 Audio';
            } else {
              userData.lastMessage = lastMessageData.text || 'No message text';
            }

            userData.lastMessageTime = lastMessageData.createdAt;
          } else {
            userData.lastMessage = 'No messages yet';
            userData.lastMessageTime = null;
          }

          tempData.push(userData);
        }
      }

      // Fetch Group Chats
      const groupChatsSnapshot = await firestore()
        .collection('GroupChats')
        .get();

      console.log('Group Chats Found:', groupChatsSnapshot.docs.length);

      for (const doc of groupChatsSnapshot.docs) {
        const groupData = doc.data();
        console.log('Group Data:', groupData);
        const members = groupData.members || [];

        const isMember = members.some(member => member.userId === id);

        if (isMember) {
          let groupInfo = {
            id: groupData.groupId,
            name: groupData.groupName,
            isGroupChat: true,
            lastMessage: 'No messages yet',
            lastMessageTime: groupData.createdAt
              ? groupData.createdAt.toMillis()
              : null,
          };

          // Fetching Last Group Message and Last Group Message Time.
          const lastGroupMessageSnapshot = await firestore()
            .collection('GroupChats')
            .doc(groupData.groupId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get();

          if (!lastGroupMessageSnapshot.empty) {
            const lastGroupMessageData =
              lastGroupMessageSnapshot.docs[0].data();

            if (lastGroupMessageData.image) {
              groupInfo.lastMessage = '📷 Photo';
            } else if (lastGroupMessageData.audio) {
              groupInfo.lastMessage = '🔊 Audio';
            } else {
              groupInfo.lastMessage =
                lastGroupMessageData.text || 'No message text';
            }

            groupInfo.lastMessageTime =
              lastGroupMessageData.createdAt?.toMillis() || null;
          }

          tempData.push(groupInfo);
        }
      }
      tempData.sort((a, b) => {
        if (!a.lastMessageTime) {return 1;}
        if (!b.lastMessageTime) {return -1;}
        return b.lastMessageTime - a.lastMessageTime;
      });

      setUsers(tempData);
    } catch (error) {
      console.error('Error fetching users or groups:', error);
    }
    finally {
      setLoading(false);
    }
  };

  //Formatting Last Message Time
  const formatTime = timestamp => {
    if (!timestamp) {
      return '';
    }
    const currentTime = Date.now();
    const timeDifference = currentTime - timestamp;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks >= 1) {
      return `${weeks}w`;
    } else if (days >= 1) {
      return `${days}d`;
    } else if (hours >= 1) {
      return `${hours}h`;
    } else if (minutes >= 1) {
      return `${minutes}m`;
    } else {
      return 'Just now';
    }
  };

  // To render Screen Data on Focus immediately
  useFocusEffect(
    useCallback(() => {
      getUsers();
    }, []),
  );

  // useEffect(() => {
  //   getUsers();

  //   return () => {
  //   };
  // }, []);

  //Filter Users according to searched user or group
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );


  const handleLongPress = (groupId) => {
    setSelectedGroupId(groupId);
    setDeleteModalVisible(true);
  };

  // Function to delete the group
  const deleteGroup = async () => {
    try {
      await firestore().collection('GroupChats').doc(selectedGroupId).delete();
      setUsers(users.filter(user => user.id !== selectedGroupId));
      setDeleteModalVisible(false);
      setSelectedGroupId(null);
    } catch (error) {
      console.error('Error deleting group:', error);
    }
  };
  const renderShimmer = () => {
    return (
      <View style={styles.listContainer}>
        <ShimmerPlaceHolder style={styles.shimmerProfilePic} />
        <View style={styles.shimmerDetails}>
          <ShimmerPlaceHolder style={styles.shimmerUserName} />
          <ShimmerPlaceHolder style={styles.shimmerLastMessage} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar/>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={Icons.back} style={styles.backImg} />
        </TouchableOpacity>
        <View style={styles.idContainer}>
          <Text style={styles.id}>singh_anshulpratap</Text>
          <Image source={Icons.bottomArrow} style={styles.bottomArrowImg} />
        </View>
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={() => setModalVisible(true)}>
          <Image source={Icons.newMsg} style={styles.newMsg} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={loading ? Array(6).fill({}) : filteredUsers}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          if (loading) {
            return renderShimmer(); // Show shimmer during loading
          }
          return (
            <View style={styles.listContainer}>
              <TouchableOpacity
               onLongPress={() => {
                if (item.isGroupChat) {
                  handleLongPress(item.id);
                }
              }}
                onPress={() => {
                  if (item.isGroupChat) {
                    // Navigate to Group Chat screen
                    console.log('Navigation to Group Chat Screen');
                    navigation.navigate('GroupChat', {
                      groupId: item.id,
                      groupName: item.name,
                    });
                  } else {
                    // Navigate to individual Chat screen
                    navigation.navigate('Chat', {data: item, id});
                  }
                }}
                activeOpacity={0.7}
                style={styles.chatItem}>
                <Image
                  source={item.isGroupChat ? Icons.group : Icons.account}
                  style={styles.profilePic}
                />
                <View style={styles.chatDetails}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userDetails}>
                    {item.lastMessage}
                    <Text>{'  \u2022 '}</Text>
                    <Text style={styles.time}>
                      {formatTime(item.lastMessageTime)}
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={1.0}>
                  <Image source={Icons.camera} style={styles.cameraImg} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <TextInput
              style={styles.inputText}
              maxLength={20}
              placeholder={'Ask Meta AI or Search'}
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <View style={styles.subContainer}>
              <Text style={styles.msgText}>Messages</Text>
              <TouchableOpacity activeOpacity={1.0}>
                <Text style={styles.RequestText}>Requests</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No chats found</Text>
          </View>
        }
      />
      <ChatModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Modal
        visible={deleteModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setDeleteModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this group?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={deleteGroup}>
                <Text style={styles.confirmText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChatList;
