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
import CustomMobileInputBox from '../../components/CustomMobileInputBox';
import CustomButton from '../../components/customButton';
import {Icons} from '../../assets';
import {useTranslation} from 'react-i18next';
import {useThemeColors} from '../../utils/theme';

interface ForgotPasswordProps {
  onClose?: any;
  navigation: any;
}

const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();

  const [callingCode, setCallingCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (!error) {
      navigation.navigate('SignUpVerify', {phoneNumber});
    }
  };

  const isButtonDisabled = phoneNumber.length < 5;
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
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Image source={Icons.back} style={styles.Left} />
              </TouchableOpacity>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>
                  {t('forgotPassword.title')}
                </Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>
                  {t('forgotPassword.subTitle')}
                </Text>
              </View>
              <CustomMobileInputBox
                label={t('forgotPassword.phoneLabel')}
                callingCode={callingCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                Icon={Icons.telephone}
                error={error}
                setError={setError}
                errorText={
                  t('signUp.error.mobile')
                }
              />

              <CustomButton
                title={t('forgotPassword.send')}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};
export default ForgotPassword;
