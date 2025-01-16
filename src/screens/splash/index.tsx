import React, {useEffect} from 'react';
import {View, Image, useColorScheme} from 'react-native';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigator/StackNavigation';

type SplashScreenProps = {
  navigation:StackNavigationProp<StackParamList, 'SplashScreen'>};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}:any) => {

  const theme = useColorScheme();
  console.log('Current Theme====>', theme);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TutorialScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/icons/splash.png')}
        style={styles.splashlogo}/>
    </View>
  );
};
export default SplashScreen;
