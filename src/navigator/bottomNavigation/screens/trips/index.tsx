/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons} from '../../../../assets';
import {vw, vh} from '../../../../utils/dimension';
import {size} from '../../../../utils/size';

const Trips = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trips</Text>
        <TouchableOpacity>
          <Image source={Icons.settings} style={styles.settingsImg} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 24}}> In Progress......</Text>
      </View>
    </View>
  );
};

export default Trips;

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
    backgroundColor: '#5698D3',
  },
  headerText: {
    fontSize: size.headerTitle,
    fontWeight: '600',
    color: '#ffffff',
  },
  settingsImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});
