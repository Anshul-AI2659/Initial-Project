import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import CustomInputBox from '../../components/customInput';
import CustomButton from '../../components/customButton';
import CustomPasswordInputBox from '../../components/customPassword';
import {validateEmail, validatePassword} from '../../utils/validations';
import {Icons} from '../../assets';
import {useThemeColors} from '../../utils/theme';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginProps {
  onClose?: any;
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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

  const handleNext = async () => {
    await AsyncStorage.setItem('userToken', 'your_auth_token');
    setIsLoggedIn(true);
    console.log('Login successful');
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomNavigation'}],
    });
  };

  const isButtonDisabled =
    emailError ||
    passwordError ||
    !validateEmail(email) ||
    !validatePassword(password);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView style={{flex: 1}}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
              translucent={true}
            />
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>{t('login.title')}</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>{t('login.subTitle')}</Text>
              </View>

              <CustomInputBox
                name={email}
                label={t('login.emailLabel')}
                maxLength={50}
                keyboardType={'email-address'}
                onChangeText={handleEmailChange}
                setName={setEmail}
                Icon={Icons.email}
                Error={emailError}
                setError={setEmailError}
                errorText={t('signUp.error.email')}
              />
              <CustomPasswordInputBox
                name={password}
                label={t('login.passwordLabel')}
                Icon={Icons.lock}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                Error={passwordError}
                onChangeText={handlePasswordChange}
                maxLength={50}
                keyboardType="default"
                errorText={
                  t('signUp.error.password')
                }
              />
              <TouchableOpacity
                style={styles.forgotPass}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text style={styles.forgotPassText}>
                  {t('login.forgotPass')}
                </Text>
              </TouchableOpacity>

              <CustomButton
                title={t('login.signin')}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />
              <TouchableOpacity style={styles.googleView} activeOpacity={0.6}>
                <Image source={Icons.google} style={styles.google} />
                <Text style={styles.googleText}>{t('login.google')}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.facebookView}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('FacebookLogin');
                }}>
                <Image source={Icons.facebook} style={styles.google} />
                <Text style={styles.facebookText}>{t('login.facebook')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.accountText}>{t('login.signUpPrompt')}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'SignUp'}],
                  })
                }>
                <Text style={styles.loginText}> {t('login.signUp')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
