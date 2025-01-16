import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons} from '../../assets';
import {vh, vw} from '../../utils/dimension';


const More = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>More Menu</Text>
        <TouchableOpacity >
          <Image source={Icons.settings} style={styles.settingsImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};4

export default More;

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
    paddingBottom:vh(20),
    backgroundColor: '#5698D3',
  },
  headerText:{
    fontSize:18,
    fontWeight:'600',
    color:'#ffffff',
  },
  settingsImg: {
    width: vw(24),
    height: vw(24),
    resizeMode:'contain',
  },
});
