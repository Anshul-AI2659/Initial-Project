import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import SplashScreen from '../screens/splash';
import {useColorScheme} from 'react-native';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import ForgotPassword from '../screens/forgotPassword';
import SignUpVerify from '../screens/verifyOtp';
import TutorialScreen from '../screens/tutorialScreen';
import TabNavigator from './tabNavigation';
import BottomNavigation from './bottomNavigation';
import Settings from '../screens/settings';

export type StackParamList = {
  SplashScreen: undefined;
  SignUp:undefined;
  Login:undefined;
  ForgotPassword:undefined;
  SignUpVerify:undefined;
  Home: undefined;
  ScrollableCalendarExample:undefined;
  SignInGoogle:undefined;
  TutorialScreen:undefined;
  FaceBookLogin:undefined;
  TabNavigator:undefined;
  BottomNavigation:undefined;
  Settings:undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="TabNavigator"
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
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
