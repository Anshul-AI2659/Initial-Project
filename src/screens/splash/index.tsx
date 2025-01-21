import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackParamList } from '../../utils/types';
import {Images} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SplashScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}: any) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          navigation.reset({
            index: 0,
            routes: [{name: 'BottomNavigation'}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
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
