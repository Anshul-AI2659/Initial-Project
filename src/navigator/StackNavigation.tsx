import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import {StyleSheet, useColorScheme, View} from 'react-native';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import ForgotPassword from '../screens/forgotPassword';
import SignUpVerify from '../screens/verifyOtp';
import TutorialScreen from '../screens/tutorialScreen';
import TabNavigator from './topTabNavigation';
import BottomNavigation from './bottomNavigation';
import Settings from '../screens/settings';
import ChatList from '../screens/chatList';
import Chat from '../screens/chat';
import GroupChatList from '../screens/groupChatList';
import GroupChat from '../screens/groupChat';
import Theme from '../screens/theme';
import {useDispatch} from 'react-redux';
import {toggleTheme, setTheme} from '../redux/config/ThemeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackParamList} from '../utils/types';
import Fingerprint from '../screens/fingerPrint';
import NetInfo from '@react-native-community/netinfo';
import NetInfoComp from '../screens/offlineScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const currentSystemTheme = useColorScheme();
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('themeMode');
        if (
          storedTheme === 'light' ||
          storedTheme === 'dark' ||
          storedTheme === 'systemDefault'
        ) {
          dispatch(setTheme(storedTheme));
        } else if (
          currentSystemTheme &&
          (currentSystemTheme === 'light' || currentSystemTheme === 'dark')
        ) {
          dispatch(toggleTheme(currentSystemTheme));
        } else {
          dispatch(toggleTheme('systemDefault'));
        }
      } catch (error) {
        console.error('Failed to load theme from storage:', error);
      }
    };

    fetchTheme();
  }, [dispatch, currentSystemTheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUpVerify" component={SignUpVerify} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="GroupChatList" component={GroupChatList} />
        <Stack.Screen name="GroupChat" component={GroupChat} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Fingerprint" component={Fingerprint} />

      </Stack.Navigator>
      {!isConnected && (
        <View style={styles.overlay}>
          <NetInfoComp
            isConnected={isConnected}
            setIsConnected={setIsConnected}
          />
        </View>
      )}
    </NavigationContainer>
  );
};
export default StackNavigation;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});
