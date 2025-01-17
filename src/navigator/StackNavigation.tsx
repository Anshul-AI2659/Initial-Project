import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
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

export type StackParamList = {
  SplashScreen: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  SignUpVerify: undefined;
  TutorialScreen: undefined;
  TabNavigator: undefined;
  BottomNavigation: undefined;
  Settings: undefined;
  Theme: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const currentSystemTheme = useColorScheme();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('themeMode');
        if (storedTheme) {
          dispatch(setTheme(storedTheme));
        } else {
          dispatch(toggleTheme(currentSystemTheme));
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
        <Stack.Screen name="Theme" component={Theme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
