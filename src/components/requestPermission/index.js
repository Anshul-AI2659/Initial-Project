import { PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'; // Import necessary modules

export const requestPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Audio Recording Permission',
          message: 'We need your permission to record audio for sending voice messages.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Audio recording permission granted');
      } else {
        console.log('Audio recording permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  } else if (Platform.OS === 'ios') {
    try {
      // Request audio permission for iOS
      const permissionStatus = await request(PERMISSIONS.IOS.MICROPHONE);

      if (permissionStatus === RESULTS.GRANTED) {
        console.log('Audio recording permission granted');
      } else if (permissionStatus === RESULTS.DENIED) {
        console.log('Audio recording permission denied');
      } else if (permissionStatus === RESULTS.BLOCKED) {
        console.log('Audio recording permission blocked');
      }
    } catch (error) {
      console.error('Error requesting iOS permissions', error);
    }
  }
};
