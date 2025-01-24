import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import {useColorScheme} from 'react-native';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import ForgotPassword from '../screens/forgotPassword';
import SignUpVerify from '../screens/verifyOtp';
import TutorialScreen from '../screens/tutorialScreen';
import TabNavigator from './topTabNavigation';
import BottomNavigation from './bottomNavigation';
import Settings from '../screens/settings';
import Theme from '../screens/theme';
import {useDispatch} from 'react-redux';
import {toggleTheme, setTheme} from '../redux/config/ThemeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackParamList} from '../utils/types';
import Fingerprint from '../screens/fingerPrint';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const currentSystemTheme = useColorScheme();
  const dispatch = useDispatch();

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
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="Fingerprint" component={Fingerprint} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
