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
import {Icons} from '../../assets';

const ChatModalLongPress = ({
  visible,
  onClose,
  selectedMessageId,
  onEmojiSelect,
  onDelete,
}) => {
  const emojis = [
    {id: 'emoji1', source: Icons.emoji1, emoji: '👍'},
    {id: 'emoji2', source: Icons.emoji2, emoji: '❤️'},
    {id: 'emoji3', source: Icons.emoji3, emoji: '😂'},
    {id: 'emoji4', source: Icons.emoji4, emoji: '🎉'},
    {id: 'emoji5', source: Icons.emoji5, emoji: '👎'},
  ];

  const handleEmojiPress = emoji => {
    onEmojiSelect(selectedMessageId, emoji);
    onClose();
  };

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.modalContent}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                {emojis.map((emoji, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleEmojiPress(emoji)}>
                    <Image
                      style={{height: 30, width: 30}}
                      source={emoji.source}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity style={styles.modalButton}>
                <Image source={Icons.forward} style={styles.buttonIcon} />
                <Text style={styles.modalButtonText}>{'Forward'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton}>
                <Image source={Icons.reply} style={styles.buttonIcon} />
                <Text style={styles.modalButtonText}>{'Reply'}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  onDelete(selectedMessageId);
                  onClose();
                }}>
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

export default ChatModalLongPress;

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
    height: 20,
    width: 20,
  },
  modalButtonText: {
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 8,
    color: '#6a7a86',
  },
  modalButton: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 30,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#fafafa',
  },
  modalButtonTextDelete: {
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 8,
    color: 'red',
  },
});

// import React from 'react';
// import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// const ReactionModal = ({visible, onClose, onReactionSelect}) => {
//   const reaction = ['👍', '❤️', '😂', '😮', '😢', '👏'];

//   return (
//     <Modal
//       transparent={true}
//       visible={visible}
//       animationType="fade"
//       onRequestClose={onClose}>
//       <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
//         <View style={styles.reactionContainer}>
//           {reaction.map(reaction => (
//             <TouchableOpacity
//               key={reaction}
//               onPress={() => {
//                 onReactionSelect(reaction);
//                 onClose();
//               }}>
//               <Text style={styles.emoji}>{reaction}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   reactionContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 10,
//   },
//   emoji: {
//     fontSize: 30,
//     marginHorizontal: 10,
//   },
// });

// export default ReactionModal;
