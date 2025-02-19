import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Icons} from '../../assets';
import {styles} from './styles';

let id = '';

const ChatList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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

            const lastMessageSnapshot = await firestore()
              .collection('chats')
              .doc(id + userData.userId)
              .collection('messages')
              .orderBy('createdAt', 'desc')
              .limit(1)
              .get();

            if (!lastMessageSnapshot.empty) {
              const lastMessageData = lastMessageSnapshot.docs[0].data();
              if (lastMessageData.text) {
                userData.lastMessage = lastMessageData.text;
              } else if (lastMessageData.image) {
                userData.lastMessage = '📷 Photo';
              } else {
                userData.lastMessage = 'No message text';
              }
              userData.lastMessageTime = lastMessageData.createdAt;
            } else {
              userData.lastMessage = 'No messages yet';
              userData.lastMessageTime = null;
            }

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

  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity activeOpacity={1.0}>
          <Image source={Icons.newMsg} style={styles.newMsg} />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.inputText}
        placeholder={'Ask Meta AI or Search'}
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <TouchableOpacity
                onPress={() => {
                  console.log(
                    'Navigating to Chat screen with data:',
                    item,
                    'and id:',
                    id,
                  );
                  navigation.navigate('Chat', {data: item, id});
                }}
                activeOpacity={0.7}
                style={styles.chatItem}>
                <Image source={Icons.account} style={styles.profilePic} />
                <View style={styles.chatDetails}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userDetails}>{item.lastMessage}</Text>
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
    </SafeAreaView>
  );
};

export default ChatList;
