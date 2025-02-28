/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Modal,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Icons} from '../../assets';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import uuid from 'react-native-uuid';
import CustomStatusBar from '../../components/statusBar';
import { SafeAreaView } from 'react-native-safe-area-context';

let id = '';
const GroupChatList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]); // New state for selected users
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [groupName, setGroupName] = useState(''); // Group name state
  const navigation = useNavigation();

  const getUsers = async () => {
    id = await AsyncStorage.getItem('USERID');
    const email = await AsyncStorage.getItem('EMAIL');
    let tempData = [];

    firestore()
      .collection('users')
      .where('email', '!=', email)
      .get()
      .then(async res => {
        if (res.docs.length > 0) {
          for (const item of res.docs) {
            let userData = item.data();
            tempData.push(userData);
          }
        }
        setUsers(tempData);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  useFocusEffect(
    useCallback(() => {
      getUsers();
    }, []),
  );

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleLongPress = user => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter(u => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleGroupCreation = () => {
    if (selectedUsers.length === 0) {
      Alert.alert('No users selected', 'Please select at least one user.');
      return;
    }
    setIsModalVisible(true);
  };

  const createGroupChat = async (groupName, selectedUsers) => {
    const groupId = uuid.v4();
    const currentUserId = await AsyncStorage.getItem('USERID');

    const currentUserDoc = await firestore()
    .collection('users')
    .doc(currentUserId)
    .get();

  const currentUserData = currentUserDoc.data();  // Get current user data

  if (!currentUserData) {
    console.error('Current user data not found');
    return;
  }

    const groupData = {
      groupId,
      groupName,
      members: [
        { ...currentUserData, userId: currentUserId },  // Include current user full data
        ...selectedUsers,  // Other selected users
      ],
      createdAt: firestore.FieldValue.serverTimestamp(),
    };

    await firestore().collection('GroupChats').doc(groupId).set(groupData);
    console.log('Group created with ID:', groupId);
  };

  const confirmGroupCreation = async () => {
    if (!groupName.trim()) {
      Alert.alert('Invalid Group Name', 'Please enter a valid group name.');
      return;
    }

    console.log('Selected Users:', selectedUsers);
    console.log('Group Name:', groupName);

    try {
      await createGroupChat(groupName, selectedUsers);
      Alert.alert(
        'Group Created',
        `The group "${groupName}" was created successfully!`,
      );
    } catch (error) {
      console.error('Error creating group chat:', error);
      Alert.alert('Error', 'Failed to create group chat. Please try again.');
    }

    setSelectedUsers([]);
    setGroupName('');
    setIsModalVisible(false);
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
          <Text style={styles.id}>New Group Chat</Text>
        </View>
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          const isSelected = selectedUsers.includes(item);
          return (
            <View style={styles.listContainer}>
              <TouchableOpacity
                onLongPress={() => handleLongPress(item)} // Long press to select users
                onPress={() => {
                  console.log('Navigating to Chat screen with data:', item);
                  // navigation.navigate('Chat', {data: item});
                }}
                activeOpacity={0.7}
                style={styles.chatItem}>
                <Image source={Icons.account} style={styles.profilePic} />
                <View style={styles.chatDetails}>
                  <Text style={styles.userName}>{item.name}</Text>
                </View>
                {isSelected && (
                  <View style={styles.checkbox}>
                    <Text style={styles.checkboxText}>✔</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <TextInput
              style={styles.inputText}
              placeholder={'Ask Meta AI or Search'}
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No chats found</Text>
          </View>
        }
      />
      {selectedUsers.length > 1 && (
        <View>
          <TouchableOpacity
            onPress={handleGroupCreation}
            style={{
              backgroundColor: Colors.primary,
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              marginHorizontal: 20,
              marginBottom: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.White}}>
              Create group chat
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Modal for entering group name */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Group</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter Group Name"
              value={groupName}
              onChangeText={setGroupName}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={confirmGroupCreation}>
                <Text style={styles.modalButtonText}>Create Group</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default GroupChatList;
