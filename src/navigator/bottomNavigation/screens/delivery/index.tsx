import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { vh, vw } from '../../../../utils/dimension';
import { size } from '../../../../utils/size';
import { Colors } from '../../../../utils/colors';

const Delivery = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Delivery</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.bodyText}> In Progress......</Text>
      </View>
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
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 24,
  },
});
