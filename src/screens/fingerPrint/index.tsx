import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useNavigation } from '@react-navigation/native';

const Fingerprint: React.FC = () => {
  const [biometricModalVisible, setBiometricModalVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted
  const navigation = useNavigation(); // Hook to access navigation

  useEffect(() => {
    setIsMounted(true); // Set the component as mounted
    return () => setIsMounted(false); // Cleanup when unmounting
  }, []);

  // Function to check if biometric is available and then authenticate
 
//   const handleBiometricLogin = async () => {
//     const rnBiometrics = new ReactNativeBiometrics();
//     const { available, biometryType } = await rnBiometrics.isSensorAvailable();
  
//     console.log("Biometric Available: ", available);
//     console.log("Biometry Type: ", biometryType);
  
//     if (available) {
//       if (biometryType === ReactNativeBiometrics.Biometrics || biometryType === ReactNativeBiometrics.Fingerprint) {
//         setBiometricModalVisible(true);
  
//         rnBiometrics.simplePrompt({ promptMessage: 'Confirm your fingerprint to login' })
//           .then(resultObject => {
//             const { success } = resultObject;
  
//             if (success) {
//               Alert.alert('Authentication successful', 'You are now logged in.');
//               setBiometricModalVisible(false);
//               navigation.navigate('BottomNavigation');
//             } else {
//               Alert.alert('Authentication failed', 'Please try again.');
//               setBiometricModalVisible(false);
//             }
//           })
//           .catch(() => {
//             Alert.alert('Biometric prompt failed', 'Authentication canceled or unavailable.');
//             setBiometricModalVisible(false);
//           });
//       } else {
//         Alert.alert('Biometric Authentication', 'Biometric authentication not supported on this device.');
//       }
//     } else {
//       Alert.alert('Biometric Authentication', 'Biometric authentication not available.');
//     }
//   };
  

const handleBiometricLogin = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const { available, biometryType } = await rnBiometrics.isSensorAvailable();
  
    console.log("Biometric Available: ", available);
    console.log("Biometry Type: ", biometryType);
  
    // Ensure biometric authentication is available
    if (available) {
      // Check if the biometryType is Biometrics or any other supported type
      if (biometryType) {
        setBiometricModalVisible(true);
  
        rnBiometrics.simplePrompt({ promptMessage: 'Confirm your fingerprint to login' })
          .then(resultObject => {
            const { success } = resultObject;
  
            if (success) {
              Alert.alert('Authentication successful', 'You are now logged in.');
              setBiometricModalVisible(false);
              navigation.navigate('BottomNavigation');
            } else {
            //   Alert.alert('Authentication failed', 'Please try again.');
              setBiometricModalVisible(false);
            }
          })
          .catch(() => {
            Alert.alert('Biometric prompt failed', 'Authentication canceled or unavailable.');
            setBiometricModalVisible(false);
          });
      } else {
        Alert.alert('Biometric Authentication', 'Biometric authentication not supported on this device.');
      }
    } else {
      Alert.alert('Biometric Authentication', 'Biometric authentication not available.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Fingerprint</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleBiometricLogin}>
        <Text style={styles.loginButtonText}>Login with Fingerprint</Text>
      </TouchableOpacity>

      {/* Biometric Modal */}
      <Modal
        visible={biometricModalVisible}
        transparent={true}
        onRequestClose={() => setBiometricModalVisible(false)}
      >
        <View style={styles.modalContainer}>
        </View>
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
    backgroundColor: '#0288D1',
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
