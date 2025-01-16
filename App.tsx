/* eslint-disable react-native/no-inline-styles */
import {View,LogBox, StatusBar} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigator/StackNavigation';
import './src/locales/i18n';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#5698D3'}barStyle={'default'} translucent={true}/>
      <StackNavigation />
    </View>
  );
};

export default App;
