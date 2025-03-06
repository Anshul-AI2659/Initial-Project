import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { vh, vw } from '../../../../utils/dimension';
import { size } from '../../../../utils/size';
import { Colors } from '../../../../utils/colors';
import FilterModal from '../../../../components/filterModal';

const Delivery = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Delivery</Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.bodyText}>{'Filters'}</Text>
        </TouchableOpacity>
      </View>
      <FilterModal visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '14%',
    alignItems: 'flex-end',
    paddingHorizontal: vw(15),
    paddingBottom: vh(20),
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontSize: size.headerTitle,
    fontWeight: '600',
    color: Colors.White,
  },
  settingsImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  subContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    marginTop:vh(16),
  },
  filterButton:{
    backgroundColor:Colors.primary,
    paddingHorizontal:20,
    paddingVertical:5,
  },
  bodyText: {
    fontSize: 20,
    color:Colors.White,
    fontWeight:'400',
  },
});
