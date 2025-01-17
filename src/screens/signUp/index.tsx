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
} from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, {useState} from 'react';
import {Styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {CountryCode} from 'react-native-country-picker-modal';
// import CustomMobileInputBox from '../../components/customMobile';
import CustomInputBox from '../../components/customInput';
import CustomButton from '../../components/customButton';
import CustomPasswordInputBox from '../../components/customPassword';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validations';
import {Icons} from '../../assets';
import DOBPicker from '../../components/customDOB';
import {useThemeColors} from '../../utils/theme';
import {useTranslation} from 'react-i18next';

interface SignUpProps {
  onClose?: any;
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  // const [callingCode, setCallingCode] = useState('+91');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
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
  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    if (text.length === 0) {
      setConfirmPasswordError(false);
    } else if (text !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  // const onSelect = (country: any) => {
  //   setCountryCode(country.cca2);
  //   setCallingCode(`+${country.callingCode[0]}`);
  //   setPickerVisible(false);
  // };
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

  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
    if (text === '') {
      setFirstNameError(false);
    } else if (validateName(text)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
    if (text === '') {
      setLastNameError(false);
    } else if (validateName(text)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  const handleNext = () => {
    if (!error) {
      navigation.navigate('Login', {phoneNumber});
    }
  };

  const isButtonDisabled =
    firstNameError ||
    lastNameError ||
    emailError ||
    passwordError ||
    !validateName(firstName) ||
    !validateName(lastName) ||
    !validateEmail(email) ||
    !validatePassword(password);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
              translucent={true}
            />
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>{t('signUp.title')}</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>{t('signUp.subTitle')}</Text>
              </View>

              <CustomInputBox
                name={firstName}
                label={t('signUp.firstNameLabel')}
                maxLength={25}
                keyboardType={'name-phone-pad'}
                onChangeText={handleFirstNameChange}
                setName={setFirstName}
                Icon={Icons.user}
                Error={firstNameError}
                setError={setFirstNameError}
                errorText={
                  'Please use only alphabetical letters and minimum length is 3 characters.'
                }
              />
              <CustomInputBox
                name={lastName}
                label={t('signUp.lastNameLabel')}
                maxLength={25}
                keyboardType="name-phone-pad"
                onChangeText={handleLastNameChange}
                setName={setLastName}
                Icon={Icons.user}
                Error={lastNameError}
                setError={setLastNameError}
                errorText={
                  'Please use only alphabetical letters and minimum length is 3 characters.'
                }
              />
              <DOBPicker
                label={t('signUp.dob')}
                Icon={Icons.birthday}
                calendarIcon={Icons.calendar}
                onDateChange={handleDateChange}
              />
              <CustomInputBox
                name={email}
                label={t('signUp.emailLabel')}
                maxLength={50}
                keyboardType={'email-address'}
                onChangeText={handleEmailChange}
                setName={setEmail}
                Icon={Icons.email}
                Error={emailError}
                setError={setEmailError}
                errorText={'Please enter valid email'}
              />
              <CustomPasswordInputBox
                name={password}
                label={t('signUp.passwordLabel')}
                Icon={Icons.lock}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                Error={passwordError}
                onChangeText={handlePasswordChange}
                maxLength={50}
                keyboardType="default"
                // errorText="Password must be at least 6 characters"
                errorText={[
                  'Password must contain an UpperCase Letter.',
                  'Password must contain a LowerCase Letter.',
                  'Password must contain a numeric value.',
                  'Password must contain a special character.',
                  'Password must be at least 8 characters.',
                ]}
              />
              <CustomPasswordInputBox
                name={confirmPassword}
                label={t('signUp.cnfPasswordLabel')}
                Icon={Icons.lock}
                isPasswordVisible={isConfirmPasswordVisible}
                togglePasswordVisibility={toggleConfirmPasswordVisibility}
                Error={confirmPasswordError}
                onChangeText={handleConfirmPasswordChange}
                maxLength={50}
                keyboardType="default"
                errorText={['Passwords do not match']}
              />
              {/* <CustomMobileInputBox
                label={'Mobile Number'}
                countryCode={countryCode}
                callingCode={callingCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onSelect={onSelect}
                setPickerVisible={setPickerVisible}
                Icon={Icons.telephone}
                error={error}
                setError={setError}
                errorText={'Mobile no. should be min 5 digit and max 13 digit.'}
              /> */}

              <CustomButton
                title={t('signUp.signUp')}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.accountText}>
                {t('signUp.alreadyAccount')}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                  })
                }>
                <Text style={styles.loginText}> {t('signUp.login')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;
