/* eslint-disable react-native/no-inline-styles */
import {View, LogBox, StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StackNavigation from './src/navigator/StackNavigation';
import './src/utils/locales/i18n';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle={'default'}
          translucent={true}
        />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
