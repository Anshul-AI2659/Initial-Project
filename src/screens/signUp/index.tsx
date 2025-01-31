import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import DOBPicker from '../../components/customDOB';
import CustomInputBox from '../../components/customInput';
import CustomMobileInputBox from '../../components/CustomMobileInputBox';
import {useThemeColors} from '../../utils/theme';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from '../../utils/validations';
import {Styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';

interface SignUpProps {
  onClose?: StackNavigationProp<StackParamList>;
  navigation: StackNavigationProp<StackParamList>;
}

const SignUp = ({navigation}: SignUpProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    callingCode: '+91',
    selectedDate: undefined as Date | undefined,
  });

  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    phoneError: false,
  });

  const [visibility, setVisibility] = useState({
    isPasswordVisible: false,
    isConfirmPasswordVisible: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));

    switch (field) {
      case 'firstName':
        setErrors(prev => ({
          ...prev,
          firstNameError: value === '' ? false : !validateName(value),
        }));
        break;
      case 'lastName':
        setErrors(prev => ({
          ...prev,
          lastNameError: value === '' ? false : !validateName(value),
        }));
        break;
      case 'email':
        setErrors(prev => ({
          ...prev,
          emailError: value === '' ? false : !validateEmail(value),
        }));
        break;
      case 'password':
        setErrors(prev => ({
          ...prev,
          passwordError: value === '' ? false : !validatePassword(value),
        }));
        break;
      case 'confirmPassword':
        setErrors(prev => ({
          ...prev,
          confirmPasswordError:
            value === '' ? false : value !== formData.password,
        }));
        break;
      default:
        break;
    }
  };

  const toggleVisibility = (field: string) => {
    setVisibility(prev => ({
      ...prev,
      [field]: !prev[field as keyof typeof visibility],
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({...prev, selectedDate: date}));
  };

  const handleNext = () => {
    if (!errors.phoneError) {
      navigation.navigate(ScreenNames.VerifyOtp);
    }
  };

  const isButtonDisabled =
    formData.phoneNumber.length < 5 ||
    errors.firstNameError ||
    errors.lastNameError ||
    errors.emailError ||
    errors.passwordError ||
    errors.confirmPasswordError ||
    !validateName(formData.firstName) ||
    !validateName(formData.lastName) ||
    !validateEmail(formData.email) ||
    !validatePhoneNumber(formData.phoneNumber);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
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
                name={formData.firstName}
                label={t('signUp.firstNameLabel')}
                maxLength={25}
                keyboardType={'name-phone-pad'}
                onChangeText={text => handleInputChange('firstName', text)}
                Icon={Icons.user}
                Error={errors.firstNameError}
                errorText={t('signUp.error.name')}
              />
              <CustomInputBox
                name={formData.lastName}
                label={t('signUp.lastNameLabel')}
                maxLength={25}
                keyboardType="name-phone-pad"
                onChangeText={text => handleInputChange('lastName', text)}
                Icon={Icons.user}
                Error={errors.lastNameError}
                errorText={t('signUp.error.name')}
              />
              <DOBPicker
                label={t('signUp.dob')}
                Icon={Icons.birthday}
                calendarIcon={Icons.calendar}
                onDateChange={handleDateChange}
              />
              <CustomInputBox
                name={formData.email}
                label={t('signUp.emailLabel')}
                maxLength={20}
                keyboardType={'email-address'}
                onChangeText={text => handleInputChange('email', text)}
                Icon={Icons.email}
                Error={errors.emailError}
                errorText={t('signUp.error.email')}
              />
              <CustomInputBox
                name={formData.password}
                label={t('signUp.passwordLabel')}
                Icon={Icons.lock}
                Error={errors.passwordError}
                errorText={t('signUp.error.password')}
                maxLength={13}
                keyboardType="default"
                onChangeText={text => handleInputChange('password', text)}
                isPassword
                isPasswordVisible={visibility.isPasswordVisible}
                togglePasswordVisibility={() =>
                  toggleVisibility('isPasswordVisible')
                }
              />
              <CustomInputBox
                name={formData.confirmPassword}
                label={t('signUp.cnfPasswordLabel')}
                Icon={Icons.lock}
                Error={errors.confirmPasswordError}
                errorText={t('signUp.error.confirmPassword')}
                maxLength={13}
                keyboardType="default"
                onChangeText={text =>
                  handleInputChange('confirmPassword', text)
                }
                isPassword
                isPasswordVisible={visibility.isConfirmPasswordVisible}
                togglePasswordVisibility={() =>
                  toggleVisibility('isConfirmPasswordVisible')
                }
              />
              <CustomMobileInputBox
                label={t('forgotPassword.phoneLabel')}
                callingCode={formData.callingCode}
                phoneNumber={formData.phoneNumber}
                setPhoneNumber={text => handleInputChange('phoneNumber', text)}
                Icon={Icons.telephone}
                error={errors.phoneError}
                setError={value =>
                  setErrors(prev => ({...prev, phoneError: value}))
                }
                errorText={t('signUp.error.mobile')}
              />

              <CustomButton
                buttonText={t('signUp.signUp')}
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
                    routes: [{name: ScreenNames.Login}],
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
