import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CountryPicker} from 'react-native-country-codes-picker';
import {Styles} from './styles';
import {validatePhoneNumber} from '../../utils/validations';
import {useThemeColors} from '../../utils/theme';
import {Icons} from '../../assets';

interface CustomMobileInputBoxProps {
  countryCode?: any;
  callingCode?: string;
  label: string;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  onSelect?: (country: any) => void;
  setPickerVisible?: any;
  Icon: ImageSourcePropType;
  error: boolean;
  setError: (hasError: boolean) => void;
  errorText?: string;
}

const CustomMobileInputBox = ({
  callingCode,
  label,
  phoneNumber,
  setPhoneNumber,
  Icon,
  error,
  setError,
  errorText,
}: CustomMobileInputBoxProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);

  const [show, setShow] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    callingCode || '',
  );
  const [selectedFlag, setSelectedFlag] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    if (text === '') {
      setError(false);
    } else if (validatePhoneNumber(text)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <View
        style={[styles.inputContainer, error ? styles.errorContainer : null]}>
        <TouchableOpacity activeOpacity={1} style={styles.telephoneButton}>
          <Image
            source={Icon}
            style={[styles.iconStyle, {tintColor: error ? 'red' : 'grey'}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.countryCodeButton}
          activeOpacity={1}
          onPress={() => setShow(true)}>
          {selectedFlag ? (
            <Text style={styles.flagStyle}>{selectedFlag}</Text>
          ) : (
            <Text style={styles.flagStyle}>🇮🇳</Text>
          )}

          <Text style={styles.countryCodeText}>{selectedCountryCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInputMobile}
          label={label}
          keyboardType="phone-pad"
          textColor={theme.textColor}
          maxLength={13}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          mode="flat"
          underlineStyle={{display: 'none'}}
          theme={{
            colors: {
              primary: 'gray',
              placeholder: 'grey',
              background: 'transparent',
              disabled: 'transparent',
            },
          }}
        />
        <CountryPicker
          show={show}
          pickerButtonOnPress={item => {
            setSelectedCountryCode(item.dial_code);
            setSelectedFlag(item.flag);
            setShow(false);
          }}
          popularCountries={['en', 'ua', 'pl']}
          ListHeaderComponent={() => (
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}>
                <Image source={Icons.close} style={styles.backImg} />
              </TouchableOpacity>
              <Text style={styles.modalText}>Select Country</Text>
            </View>
          )}
          lang={''}
        />
      </View>

      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomMobileInputBox;
