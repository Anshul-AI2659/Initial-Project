/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import CustomButton from '../../components/customButton';
import InputField from '../../components/inputField';
import {validateEmail, validatePassword} from '../../utils/validations';
import { Icons } from '../../assets';

interface PickUpDetailsProps {
  onClose?: any;
  navigation: any;
}

const PickUpDetails = ({navigation}: PickUpDetailsProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text === '') {
      setEmailError(false);
    } else if (validateEmail(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text.length === 0) {
      setPasswordError(false);
    } else if (validatePassword(text)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleContinue = () => {
    navigation.navigate('Shipment1Details');
  };

  const isButtonDisabled =
    emailError ||
    passwordError ||
    !validateEmail(email) ||
    !validatePassword(password);

  // const isButtonDisabled =
  //   phoneNumber.length < 5 ||
  //   firstNameError ||
  //   lastNameError ||
  //   emailError ||
  //   passwordError ||
  //   !validateName(firstName) ||
  //   !validateName(lastName) ||
  //   !validateEmail(email) ||
  //   !validatePassword(password);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <InputField
              name={email}
              label={'Customer ID*'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}
              rightIcon={Icons.account}
            />
            <InputField
              name={email}
              label={'Name*'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}
            />
            <InputField
              name={email}
              label={'Email ID'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}
            />
            <InputField
              name={email}
              label={'Contact Number'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}
            />
            <InputField
              name={email}
              label={'Address ID'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}
            />
            <InputField
              name={email}
              label={'Start Time*'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}
            />
            <InputField
              name={email}
              label={'End Time*'}
              maxLength={50}
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              setName={setEmail}
              Error={emailError}
              setError={setEmailError}
              errorText={'Please enter valid email'}

            />
           <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleContinue}
          activeOpacity={0.7}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default PickUpDetails;
