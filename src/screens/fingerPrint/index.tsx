import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {StackParamList} from '../../utils/types';
import {Colors} from '../../utils/colors';

interface ForgotPasswordProps {
  onClose?: StackNavigationProp<StackParamList>;
  navigation: StackNavigationProp<StackParamList>;
}

const Fingerprint = ({navigation}: ForgotPasswordProps) => {
  const [biometricModalVisible, setBiometricModalVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleBiometricLogin = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const {available, biometryType} = await rnBiometrics.isSensorAvailable();

    console.log('Biometric Available: ', available);
    console.log('Biometry Type: ', biometryType);

    if (available) {
      if (biometryType) {
        setBiometricModalVisible(true);

        rnBiometrics
          .simplePrompt({promptMessage: 'Confirm your fingerprint to login'})
          .then(resultObject => {
            const {success} = resultObject;

            if (success) {
              Alert.alert(
                'Authentication successful',
                'You are now logged in.',
              );
              setBiometricModalVisible(false);
              navigation.navigate('BottomNavigation');
            } else {
              setBiometricModalVisible(false);
            }
          })
          .catch(() => {
            Alert.alert(
              'Biometric prompt failed',
              'Authentication canceled or unavailable.',
            );
            setBiometricModalVisible(false);
          });
      } else {
        Alert.alert(
          'Biometric Authentication',
          'Biometric authentication not supported on this device.',
        );
      }
    } else {
      Alert.alert(
        'Biometric Authentication',
        'Biometric authentication not available.',
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Fingerprint</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleBiometricLogin}>
        <Text style={styles.loginButtonText}>Login with Fingerprint</Text>
      </TouchableOpacity>

      <Modal
        visible={biometricModalVisible}
        transparent={true}
        onRequestClose={() => setBiometricModalVisible(false)}>
        <View style={styles.modalContainer}></View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});

export default Fingerprint;
