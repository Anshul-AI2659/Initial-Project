import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackParamList } from '../../utils/types';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {Icons} from '../../assets';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface FacebookProps {
  navigation: StackNavigationProp<StackParamList>;
}

const FaceBookLogin = ({navigation}: FacebookProps) => {
  const insets = useSafeAreaInsets();
  async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      auth().signInWithCredential(facebookCredential);

      navigation.navigate('BottomNavigation');
    } catch (err) {
      console.log('error', err);
    }
  }
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftContainer}>
          <Image source={Icons.back} style={styles.left} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.text}>Sign in</Text>
      </View>
      <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={Icons.facebook}
          style={styles.googleImage}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onFacebookButtonPress}>
          <Image
            source={Icons.facebook}
            style={styles.googleLogo}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Sign in with FaceBook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FaceBookLogin;
