import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import OTPInput from '../../components/customOtp';
import {useThemeColors} from '../../utils/theme';
import {StackParamList} from '../../utils/types';
import {Styles} from './styles';
import {ScreenNames} from '../../utils/screenNames';

interface SignUpVerifyProps {
  navigation: StackNavigationProp<StackParamList>;
}

const SignUpVerify = ({navigation}: SignUpVerifyProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOTPChange = (otp: string) => {
    setOtp(otp);
    setError('');
  };

  const handleVerifyOTP = () => {
    if (attempts >= 5) {
      setError(
        'You have reached the maximum attempts. Please retry in 5 minutes.',
      );
      return;
    }

    if (otp.length !== 6) {
      setError('Please enter a 6-digit code.');
      return;
    }

    if (otp === '123456') {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.Login}],
      });
    } else {
      setAttempts(prev => prev + 1);
      setError('Wrong OTP entered');
    }
  };

  const handleResend = () => {
    if (timer > 0) {return;}
    setTimer(30);
    Alert.alert(
      'Code Resent',
      'A new code has been sent to your phone number.',
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit code sent to your mobile number
          </Text>
          <Text style={styles.mobileText}>****3055</Text>
        </View>

        <OTPInput
          otpLength={6}
          onChange={handleOTPChange}
          error={error}
          autoFocus={true}
          secureTextEntry={false}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <CustomButton buttonText={'Verify OTP'} onPress={handleVerifyOTP} />
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive the code? </Text>
        <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
          <Text
            style={[
              styles.resendLink,
              {color: timer > 0 ? '#B0BCC9' : '#486284'},
            ]}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          00:{timer < 10 ? `0${timer}` : timer}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpVerify;
