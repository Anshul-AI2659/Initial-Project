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
import CustomInputBox from '../../components/customInput';
import CustomButton from '../../components/customButton';
import CustomPasswordInputBox from '../../components/customPassword';
import {validateEmail, validatePassword} from '../../utils/validations';
import {Icons} from '../../assets';

interface LoginProps {
  onClose?: any;
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const handleNext = () => {
    if (!error) {
      navigation.navigate('Home');
    }
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
          <ScrollView style={{flex: 1}}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
              translucent={true}
            />
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>Sign In</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>
                  Welcome back! Please enter your details.
                </Text>
              </View>

              <CustomInputBox
                name={email}
                label={'Email Address'}
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
                label="Password"
                Icon={Icons.lock}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                Error={passwordError}
                onChangeText={handlePasswordChange}
                maxLength={50}
                keyboardType="default"
                errorText="Please enter correct password"
              />
              <TouchableOpacity
                style={styles.forgotPass}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
              </TouchableOpacity>

              <CustomButton
                title={'Sign in'}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />
              <TouchableOpacity style={styles.googleView} activeOpacity={0.6}>
                <Image source={Icons.google} style={styles.google} />
                <Text style={styles.googleText}>Sign in with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.facebookView} activeOpacity={0.6}>
                <Image source={Icons.facebook} style={styles.google} />
                <Text style={styles.facebookText}>Sign in with Facebook</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'SignUp'}],
                  })
                }>
                <Text style={styles.loginText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
