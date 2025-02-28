/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Icons} from '../../assets';


const ChatModal = ({
  visible,
  onClose,
}) => {
  const navigation = useNavigation();
  const showGroupChatList = ()=>{
    onClose();
    navigation.navigate('GroupChatList');
  };
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.modalContent}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.modalButton}>
                <Image source={Icons.newChat} style={styles.buttonIcon} />
                <Text style={styles.modalButtonText}>{'New Chat'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={showGroupChatList}>
                <Image source={Icons.createGroup} style={styles.buttonIcon} />
                <Text style={styles.modalButtonText}>{'Group Chat'}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButton}>
                <Image source={Icons.delete} style={styles.buttonIcon} />
                <Text style={styles.modalButtonTextDelete}>{'Delete'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ChatModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  buttonIcon: {
    height: 30,
    width: 30,
    resizeMode:'contain',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 8,
    color: '#6a7a86',
  },
  modalButton: {
    flexDirection: 'row',
    padding: 30,
    borderBottomWidth: 1,
    borderRadius: 8,
    borderBottomColor: '#ccc',
  },
  modalButtonTextDelete: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 8,
    color: 'red',
  },
});
