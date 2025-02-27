import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import CustomInputBox from '../../components/customInput';
import useGoogleSignIn, {useFacebookSignIn} from '../../utils/commonFunctions';
import {ScreenNames} from '../../utils/screenNames';
import {useThemeColors} from '../../utils/theme';
import {StackParamList} from '../../utils/types';
import {validateEmail, validatePassword} from '../../utils/validations';
import {Styles} from './styles';
import CustomStatusBar from '../../components/statusBar';

import firestore from '@react-native-firebase/firestore';

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

  const [visible, setVisible] = useState(false);

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

  const loginUser = (email: string) => {
    setVisible(true);
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(res => {
        setVisible(false);
        if (res.docs.length > 0) {
          console.log(JSON.stringify(res.docs[0].data()));
          handleLogin(
            res.docs[0].data().name,
            res.docs[0].data().email,
            res.docs[0].data().userId,
          );
        } else {
          Alert.alert('User not found');
        }
      })
      .catch(error => {
        setVisible(false);
        console.log(error);
        Alert.alert('User not found');
      });
  };

  const handleLogin = async (name: any, email: any, userId: any) => {
    await AsyncStorage.setItem('userToken', 'your_auth_token');
    setIsLoggedIn(true);
    console.log('Login successful');
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', userId);
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
          <ScrollView style={styles.scrollView}>
            <CustomStatusBar />
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
                leftIcon={Icons.email}
                Error={errors.emailError}
                errorText={t('signUp.error.email')}
              />
              <CustomInputBox
                name={formData.password}
                label={t('login.passwordLabel')}
                leftIcon={Icons.lock}
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
                onPress={() => loginUser(formData.email)}
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
