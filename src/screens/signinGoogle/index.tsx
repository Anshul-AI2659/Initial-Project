import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icons} from '../../assets/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

interface SignInGoogleProps {
  navigation: any;
}

const SignInGoogle: React.FC<SignInGoogleProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '739662407076-23a2v5hq07d427iaf1rkbu3d5qo6g2ab.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

  const handleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const response = await GoogleSignin.signIn();
      console.log('12345678-->', response);
      const idToken = response?.data?.idToken;

      console.log('idToken', idToken);

      if (!idToken) {
        throw new Error('No idToken received from Google');
      }
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredentials);

      navigation.navigate('BottomNavigation');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in operation is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services not available');
      } else {
        console.error('Error during Google Sign-In:', error);
      }
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftContainer}>
          <Image source={Icons.back} style={styles.left} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.text}>Sign In</Text>
      </View>
      <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={Icons.google}
          style={styles.googleImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
          <Image source={Icons.google} style={styles.googleLogo} />
          <Text style={styles.buttonText}>SignIn Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInGoogle;
