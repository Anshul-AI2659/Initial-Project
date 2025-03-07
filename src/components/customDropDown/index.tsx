import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {Icons} from '../../assets';

interface CustomPickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  data: any;
}

const CustomPicker = ({
  selectedValue,
  onValueChange,
  data,
}: CustomPickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedValue);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onValueChange(item);
    setModalVisible(false);
  };

  return (
    <View>
      {/* Touchable field for the dropdown */}
      <TouchableOpacity
        style={styles.categoryInput}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.categoryText}>
          {selectedItem ? selectedItem : 'Select'}
        </Text>
        <Image source={Icons.bottomArrow} style={styles.dropDownIcon} />
      </TouchableOpacity>

      {/* Modal for displaying dropdown options */}
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownIcon: {
    width: vw(12),
    height: vw(12),
    resizeMode: 'contain',
  },
  categoryInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: vw(250),
    height: vh(36),
    justifyContent: 'space-between',
    marginTop: vh(10),
    paddingHorizontal: vw(16),
    backgroundColor: '#f9f9f9',
  },
  categoryText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    width: vw(200),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: vw(10),
  },
  item: {
    padding: vw(10),
  },
  itemText: {
    fontSize: 16,
  },
});

export default CustomPicker;
