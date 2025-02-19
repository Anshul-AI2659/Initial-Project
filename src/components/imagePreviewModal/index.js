import React from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const ImagePreviewModal = ({visible, onClose, image}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      {/* Close modal on background tap */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
              <Image source={{uri: image}} style={styles.imagePreview} />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default ImagePreviewModal;
