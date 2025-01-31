/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  Modal,
  FlatList,
  SafeAreaView,
  TextInput as RNTextInput,
} from 'react-native';
import {Styles} from './styles';
import {TextInput} from 'react-native-paper';
import {validatePhoneNumber} from '../../utils/validations';
import {useThemeColors} from '../../utils/theme';
import {countries} from '../../assets/countries';

interface Country {
  flag: string;
  code: string;
  name: string;
  calling_code: string;
}

interface CustomMobileInputBoxProps {
  countryCode?: String;
  callingCode?: string;
  label: string;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  onSelect?: (country: Country) => void;
  setPickerVisible?: boolean;
  Icon: ImageSourcePropType;
  error: boolean;
  setError: (hasError: boolean) => void;
  errorText?: string;
}

const CustomMobileInputBox = ({
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

  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries.countries[0],
  );

  const [searchQuery, setSearchQuery] = useState('');

  const filterCountries = countries.countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setShowModal(false);
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
          onPress={() => setShowModal(true)}>
          <Text style={styles.flagStyle}>{selectedCountry.flag}</Text>
          <Text style={styles.countryCodeText}>
            {selectedCountry.calling_code}
          </Text>
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
      </View>

      {error && <Text style={styles.errorText}>{errorText}</Text>}

      <Modal visible={showModal} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalText}>Select Country</Text>
          </View>
          <RNTextInput
            style={styles.searchInput}
            placeholder="Search country..."
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
              filterCountries;
            }}
          />
          <FlatList
            data={filterCountries}
            keyExtractor={item => item.name}
            renderItem={({item}: {item: any}) => (
              <TouchableOpacity
                style={styles.countryButton}
                onPress={() => handleSelectCountry(item)}>
                <Text style={styles.countryText}>{item.flag}</Text>
                <Text style={styles.countryName}>
                  {item.name} ({item.calling_code})
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default CustomMobileInputBox;
