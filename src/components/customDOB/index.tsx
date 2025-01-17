/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format, parse} from 'date-fns';
import {Styles} from './styles';
import { useThemeColors } from '../../utils/theme';

interface DOBPickerProps {
  label: string;
  Icon: ImageSourcePropType;
  calendarIcon: ImageSourcePropType;
  onDateChange: (selectedDate: Date | undefined) => void;
}

const DOBPicker = ({
  label,
  Icon,
  calendarIcon,
  onDateChange,
}: DOBPickerProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const [dob, setDob] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    const formattedDate = format(date, 'dd/MM/yyyy h:mm');
    setDob(formattedDate);
    onDateChange(date);
    hideDatePicker();
  };

  const handleDateInput = (input: string) => {
    setDob(input);

    const parsedDate = parse(input, 'dd/MM/yyyy h:mm', new Date());
    if (!isNaN(parsedDate.getTime())) {
      onDateChange(parsedDate);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity activeOpacity={1} style={styles.iconButton}>
        <Image source={Icon} style={[styles.iconStyle]} />
      </TouchableOpacity>

      <TextInput
        style={styles.phoneInput}
        label={label}
        value={dob}
        onPress={showDatePicker}
        onChangeText={handleDateInput}
        textColor={theme.textColor}
        keyboardType="numeric"
        mode="flat"
        underlineStyle={{
          display: 'none',
        }}
        right={
          <TextInput.Icon
            icon={() => (
              <TouchableOpacity onPress={showDatePicker}>
                <Image source={calendarIcon} style={styles.calendarImg} />
              </TouchableOpacity>
            )}
          />
        }
        theme={{
          colors: {
            primary: 'gray',
            placeholder: 'grey',
            background: 'transparent',
            disabled: 'transparent',
          },
        }}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default DOBPicker;
