import {View, StatusBar} from 'react-native';
import React from 'react';

const CustomStatusBar = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
    </View>
  );
};

export default CustomStatusBar;
