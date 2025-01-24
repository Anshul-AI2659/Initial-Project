import { useEffect } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { WEB_CLIENT_ID } from '@env';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';

type RootStackParamList = {
  BottomNavigation: undefined;
};

const useGoogleSignIn = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID, 
      offlineAccess: false,
    });
  }, []);

  const handleGoogleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
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

  return { handleGoogleSignup };
};

export default useGoogleSignIn;

const useFacebookSignIn = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleFacebookLogin = async () => {
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
      await auth().signInWithCredential(facebookCredential);

      navigation.navigate('BottomNavigation');
    } catch (err) {
      console.log('error', err);
    }
  };

  return { handleFacebookLogin };
};

export {useFacebookSignIn,useGoogleSignIn};
