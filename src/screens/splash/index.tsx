import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {Images} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenNames } from '../../utils/screenNames';

type SplashScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
        const userToken = await AsyncStorage.getItem('userToken');
        if (!hasSeenTutorial) {
          navigation.reset({
            index: 0,
            routes: [{name: ScreenNames.Tutorial}],
          });
        } else if (userToken) {
          navigation.reset({
            index: 0,
            routes: [{name: 'BottomNavigation'}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: ScreenNames.Login}],
          });
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    const timeout = setTimeout(() => {
      checkLoginStatus();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.splash} style={styles.splashlogo} />
    </View>
  );
};
export default SplashScreen;
