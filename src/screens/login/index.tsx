import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { Icons } from '../../assets';
import CustomButton from '../../components/customButton';
import CustomInputBox from '../../components/customInput';
import { useThemeColors } from '../../utils/theme';
import { StackParamList } from '../../utils/types';
import { validateEmail, validatePassword } from '../../utils/validations';
import { Styles } from './styles';
import useGoogleSignIn, { useFacebookSignIn } from '../../utils/commonFunctions';
import { ScreenNames } from '../../utils/screenNames';

interface LoginProps {
  onClose?: StackNavigationProp<StackParamList>;
  navigation: StackNavigationProp<StackParamList>;
}

const Login = ({navigation}: LoginProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();

  const {handleGoogleSignup} = useGoogleSignIn();
  const {handleFacebookLogin} = useFacebookSignIn();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailError: false,
    passwordError: false,
  });

  const [visibility, setVisibility] = useState({
    isPasswordVisible: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigation'}],
        });
      }
    };
    checkLoginStatus();
  }, [navigation]);

 

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));

    switch (field) {
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
      default:
        break;
    }
  };

  const togglePasswordVisibility = () => {
    setVisibility(prev => ({
      ...prev,
      isPasswordVisible: !prev.isPasswordVisible,
    }));
  };

  const handleLogin = async () => {
    await AsyncStorage.setItem('userToken', 'your_auth_token');
    setIsLoggedIn(true);
    console.log('Login successful');
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomNavigation'}],
    });
  };

  const isButtonDisabled =
    errors.emailError ||
    errors.passwordError ||
    !validateEmail(formData.email) ||
    !validatePassword(formData.password);

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
                name={formData.email}
                label={t('login.emailLabel')}
                maxLength={20}
                keyboardType={'email-address'}
                onChangeText={text => handleInputChange('email', text)}
                Icon={Icons.email}
                Error={errors.emailError}
                errorText={t('signUp.error.email')}
              />
              <CustomInputBox
                name={formData.password}
                label={t('login.passwordLabel')}
                Icon={Icons.lock}
                Error={errors.passwordError}
                errorText={t('signUp.error.password')}
                maxLength={20}
                keyboardType="default"
                onChangeText={text => handleInputChange('password', text)}
                isPassword
                isPasswordVisible={visibility.isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
              />
              <TouchableOpacity
                style={styles.forgotPass}
                onPress={() => {
                  navigation.navigate(ScreenNames.ForgotPassword);
                }}>
                <Text style={styles.forgotPassText}>
                  {t('login.forgotPass')}
                </Text>
              </TouchableOpacity>

              <CustomButton
                buttonText={t('login.signin')}
                onPress={handleLogin}
                isButtonDisabled={isButtonDisabled}
              />

              <CustomButton
                iconSource={Icons.google}
                buttonStyle={styles.googleView}
                buttonText={t('login.google')}
                textStyle={styles.googleText}
                onPress={handleGoogleSignup}
              />

              <CustomButton
                iconSource={Icons.facebook}
                buttonStyle={styles.facebookView}
                buttonText={t('login.facebook')}
                textStyle={styles.facebookText}
                onPress={handleFacebookLogin}
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.accountText}>{t('login.signUpPrompt')}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: ScreenNames.SignUp}],
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
