import {NavigatorScreenParams} from '@react-navigation/native';

// Bottom Tab Param List
export type BottomTabParamList = {
  Dashboard: undefined;
  Trips: undefined;
  Delivery: undefined;
  Orders: undefined;
  More: undefined;
  TabNavigator: undefined;
  StackNavigation: NavigatorScreenParams<StackParamList>;
};

// Top Tab Param List
export type TopTabParamList = {
  GeneralDetails: undefined;
  Shipment1Details: undefined;
  PickUpDetails: undefined;
  OtherDetails: undefined;
};

//Stack Param List
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
  ChatList: undefined;
  Chat: undefined;
  Theme: undefined;
  FacebookLogin: undefined;
  Fingerprint: undefined;
  SignInGoogle: undefined;
};

export type AppNavigatorParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  TopTabNavigator: NavigatorScreenParams<TopTabParamList>;
  StackNavigator: NavigatorScreenParams<StackParamList>;
};
