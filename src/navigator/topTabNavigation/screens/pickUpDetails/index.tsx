/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import InputField from '../../../../components/inputField';
import {
  validateEmail,
  validateField,
  validateName,
  validatePhoneNumber,
} from '../../../../utils/validations';
import {Icons} from '../../../../assets';
import {useThemeColors} from '../../../../utils/theme';
import {useTranslation} from 'react-i18next';
import InputDOB from '../../../../components/inputDOB';

interface PickUpDetailsProps {
  navigation: any;
}

const PickUpDetails = ({navigation}: PickUpDetailsProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();

  //States
  const [customerID, setCustomerID] = useState('');
  const [customerIDError, setCustomerIDError] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [contactNumber, setContactNumber] = useState('');
  const [contactNumberError, setContactNumberError] = useState(false);

  const [addressID, setAddressID] = useState('');
  const [addressIDError, setAddressIDError] = useState(false);

  const [startTime, setStartTime] = useState('');
  const [startTimeError, setStartTimeError] = useState(false);

  const [endTime, setEndTime] = useState('');
  const [endTimeError, setEndTimeError] = useState(false);

  const handleCustomerIDChange = (text: string) => {
    setCustomerID(text);
    if (text === '') {
      setCustomerIDError(false);
    } else if (validateField(text)) {
      setCustomerIDError(false);
    } else {
      setCustomerIDError(true);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
    if (text === '') {
      setNameError(false);
    } else if (validateName(text)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

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

  const handleContactNumberChange = (text: string) => {
    setContactNumber(text);
    if (text === '') {
      setContactNumberError(false);
    } else if (validatePhoneNumber(text)) {
      setContactNumberError(false);
    } else {
      setContactNumberError(true);
    }
  };

  const handleAddressIDChange = (text: string) => {
    setAddressID(text);
    if (text === '') {
      setAddressIDError(false);
    } else if (validateName(text)) {
      setAddressIDError(false);
    } else {
      setAddressIDError(true);
    }
  };

  const handleStartTimeChange = (text: string) => {
    setStartTime(text);
    if (text === '') {
      setStartTimeError(false);
    } else if (validateField(text)) {
      setStartTimeError(false);
    } else {
      setStartTimeError(true);
    }
  };

  const handleEndTimeChange = (text: string) => {
    setEndTime(text);
    if (text === '') {
      setEndTimeError(false);
    } else if (validateField(text)) {
      setEndTimeError(false);
    } else {
      setEndTimeError(true);
    }
  };

  const handleContinue = () => {
    navigation.navigate('OtherDetails');
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView style={styles.subContainer}>
            <InputField
              name={customerID}
              label={'Customer ID*'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleCustomerIDChange}
              setName={setCustomerID}
              Error={customerIDError}
              setError={setCustomerIDError}
              errorText={'Customer ID should be min 5 digit and max 13 digit.'}
              rightIcon={Icons.account}
            />

            <InputField
              name={name}
              label={'Name*'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleNameChange}
              setName={setName}
              Error={nameError}
              setError={setNameError}
              errorText={
                'Please use only alphabetical letters and minimum length is 3 characters.'
              }
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
              errorText={'Please enter a valid email'}
            />

            <InputField
              name={contactNumber}
              label={'Contact Number'}
              maxLength={15}
              keyboardType={'phone-pad'}
              onChangeText={handleContactNumberChange}
              setName={setContactNumber}
              Error={contactNumberError}
              setError={setContactNumberError}
              errorText={'Contact no. should be min 5 digit and max 13 digit.'}
            />

            <InputField
              name={addressID}
              label={'Address ID'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleAddressIDChange}
              setName={setAddressID}
              Error={addressIDError}
              setError={setAddressIDError}
              errorText={'Please use only alphabetical letters and minimum length is 3 characters.'}
            />

            <InputDOB
              label="Start Time*"
              Icon={Icons.birthday}
              calendarIcon={Icons.calendar}
              onDateChange={handleStartTimeChange}
            />

            <InputDOB
              label="End Time*"
              Icon={Icons.birthday}
              calendarIcon={Icons.calendar}
              onDateChange={handleEndTimeChange}
            />
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleContinue}
              activeOpacity={0.7}>
              <Text style={styles.submitButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default PickUpDetails;
