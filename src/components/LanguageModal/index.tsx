import React from 'react';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './styles';

interface LanguageItem {
  code: string;
  name: string;
}

interface LanguageModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
  title: string;
  languages: LanguageItem[];
  changeLanguage: (code: string) => void;
  closeButtonTitle?: string;
}

const LanguageModal = ({
  modalVisible,
  toggleModal,
  title,
  languages,
  changeLanguage,
  closeButtonTitle = 'Close',
}: LanguageModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={[styles.modalContainer]}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.subContainer}></View>
        </TouchableWithoutFeedback>

        <View style={[styles.modalContent]}>
          <Text style={[styles.modalTitle]}>{title}</Text>

          <FlatList
            data={languages}
            keyExtractor={item => item.code}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[styles.languageButton]}
                onPress={() => changeLanguage(item.code)}>
                <Text style={[styles.languageText]}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <Button title={closeButtonTitle} onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;
