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
import InputField from '../../components/inputField';
import {validateEmail, validatePassword} from '../../utils/validations';
import { Icons } from '../../assets';

interface Shipment1DetailsProps {
  onClose?: any;
  navigation: any;
}

const Shipment1Details = ({navigation}: Shipment1DetailsProps) => {
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
  const handleContinue = () => {
    navigation.navigate('PickUpDetails');
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
              label={'shipment1 Number'}
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
              label={'shipment1 Date Timezone'}
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
              label={'shipment1 Date*'}
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
              label={'Priority'}
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
              label={'Weight (Kg)'}
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
              label={'Volume (Cc)'}
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
              label={'Value($)'}
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
              label={'Shipping Cost($)'}
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

export default Shipment1Details;
