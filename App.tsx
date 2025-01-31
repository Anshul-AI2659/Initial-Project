/* eslint-disable react-native/no-inline-styles */
import {View, LogBox, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StackNavigation from './src/navigator/StackNavigation';
import './src/utils/locales/i18n';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <StatusBar barStyle={'default'} translucent={true} />
        <StackNavigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
