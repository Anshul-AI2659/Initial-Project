import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icons} from '../../../../assets';
import InputDOB from '../../../../components/inputDOB';
import InputField from '../../../../components/inputField';
import {useThemeColors} from '../../../../utils/theme';
import {validateField} from '../../../../utils/validations';
import {Styles} from './styles';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {TopTabParamList} from '../../../../utils/types';
import {ScreenNames} from '../../../../utils/screenNames';
import CustomButton from '../../../../components/customButton';

type Option = 'high' | 'low' | 'very high' | 'very low';

interface Shipment1DetailsProps {
  navigation: MaterialTopTabNavigationProp<TopTabParamList>;
}

const Shipment1Details = ({navigation}: Shipment1DetailsProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const [shipmentNumber, setShipmentNumber] = useState('');
  const [shipmentNumberError, setShipmentNumberError] = useState(false);

  const [shipmentDateTimezone, setShipmentDateTimezone] = useState('');
  const [shipmentDateTimezoneError, setShipmentDateTimezoneError] =
    useState(false);

  const [shipmentDate, setShipmentDate] = useState('');
  const [shipmentDateError, setShipmentDateError] = useState(false);

  const [priority, setPriority] = useState('');

  const [weight, setWeight] = useState('');

  const [volume, setVolume] = useState('');
  const [value, setValue] = useState('');
  const [shippingCost, setShippingCost] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options] = useState(['high', 'low', 'very high', 'very low']);

  const handleShipmentNumberChange = (text: string) => {
    setShipmentNumber(text);
    if (text === '') {
      setShipmentNumberError(false);
    } else if (validateField(text)) {
      setShipmentNumberError(false);
    } else {
      setShipmentNumberError(true);
    }
  };

  const handleShipmentDateTimezoneChange = (text: string) => {
    setShipmentDateTimezone(text);
    if (text === '') {
      setShipmentDateTimezoneError(false);
    } else if (validateField(text)) {
      setShipmentDateTimezoneError(false);
    } else {
      setShipmentDateTimezoneError(true);
    }
  };

  const handleShipmentDateChange = (text: string) => {
    setShipmentDate(text);
    if (text === '') {
      setShipmentDateError(true);
    } else if (validateField(text)) {
      setShipmentDateError(false);
    } else {
      setShipmentDateError(true);
    }
  };

  const handleWeightChange = (text: string) => {
    setWeight(text);
  };

  const handleVolumeChange = (text: string) => {
    setVolume(text);
  };

  const handleValueChange = (text: string) => {
    setValue(text);
  };

  const handleShippingCostChange = (text: string) => {
    setShippingCost(text);
  };

  const handleContinue = () => {
    navigation.navigate(ScreenNames.PickUp);
  };

  const handleOptionSelect = (option: Option) => {
    setInputValue(option);
    setIsModalVisible(false);
    switch (option) {
      case 'high':
        setValue('100');
        setVolume('400');
        setShippingCost('70');
        setWeight('30');
        break;
      case 'low':
        setValue('30');
        setVolume('350');
        setShippingCost('50');
        setWeight('20');
        break;
      case 'very high':
        setValue('200');
        setVolume('500');
        setShippingCost('100');
        setWeight('50');
        break;
      case 'very low':
        setValue('50');
        setVolume('200');
        setShippingCost('15');
        setWeight('10');
        break;
      default:
        setValue('');
        setShippingCost('');
        setWeight('');
        break;
    }
  };
  const isButtonDisabled =
    shipmentDate === '' || shipmentDateError || !validateField(shipmentDate);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleOptionSelect(item)}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView
            style={styles.subContainer}
            showsVerticalScrollIndicator={false}>
            <InputField
              name={shipmentNumber}
              label={'Shipment Number'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleShipmentNumberChange}
              setName={setShipmentNumber}
              Error={shipmentNumberError}
              setError={setShipmentNumberError}
              errorText={'Please enter a valid Shipment Number'}
            />
            <InputField
              name={shipmentDateTimezone}
              label={'Shipment Date Timezone'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleShipmentDateTimezoneChange}
              setName={setShipmentDateTimezone}
              Error={shipmentDateTimezoneError}
              setError={setShipmentDateTimezoneError}
              errorText={'Please enter a valid Date Timezone'}
            />
            <InputDOB
              label="Shipment Date*"
              Icon={Icons.birthday}
              calendarIcon={Icons.calendar}
              onDateChange={handleShipmentDateChange}
              mode={'datetime'}
            />
            <InputField
              name={inputValue}
              label={'Priority'}
              maxLength={50}
              onPress={() => setIsModalVisible(true)}
              showKeyboard={false}
              onChangeText={setInputValue}
              setName={setPriority}
              errorText={'Please enter valid Priority'}
            />
            <InputField
              name={weight}
              label={'Weight (Kg)'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleWeightChange}
              setName={setWeight}
              errorText={'Please enter valid Weight'}
            />
            <InputField
              name={volume}
              label={'Volume (Cc)'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleVolumeChange}
              setName={setVolume}
              errorText={'Please enter valid Volume'}
            />
            <InputField
              name={value}
              label={'Value ($)'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleValueChange}
              setName={setValue}
              errorText={'Please enter valid Value'}
            />
            <InputField
              name={shippingCost}
              label={'Shipping Cost ($)'}
              maxLength={50}
              keyboardType={'default'}
              onChangeText={handleShippingCostChange}
              setName={setShippingCost}
              errorText={'Please enter valid Shipping Cost'}
            />
          </ScrollView>
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide">
            <TouchableOpacity
              style={styles.modalContainer}
              onPress={() => setIsModalVisible(false)}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Priority</Text>
                <FlatList
                  data={options}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
          <View style={styles.footer}>
            <CustomButton
              buttonText={'Next'}
              onPress={handleContinue}
              isButtonDisabled={isButtonDisabled}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Shipment1Details;
