import React, {useState} from 'react';
import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format, parse} from 'date-fns';
import {Styles} from './styles';
import {useThemeColors} from '../../utils/theme';

interface DOBPickerProps {
  label: string;
  Icon: ImageSourcePropType;
  calendarIcon: ImageSourcePropType;
  onDateChange: any;
}

const InputDOB = ({label, calendarIcon, onDateChange}: DOBPickerProps) => {
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
    <>
      <TextInput
        style={styles.phoneInput}
        label={label}
        value={dob}
        onPress={showDatePicker}
        textColor={theme.textColor}
        onChangeText={handleDateInput}
        keyboardType="numeric"
        mode="outlined"
        underlineStyle={{
          display: 'none',
        }}
        outlineStyle={{
          borderColor: '#cccccc',
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
            background: theme.backgroundColor,
            disabled: 'transparent',
          },
        }}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default InputDOB;
