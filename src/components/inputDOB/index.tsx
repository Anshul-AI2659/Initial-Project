/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {format} from 'date-fns';
import React, {useState} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {TextInput} from 'react-native-paper';
import {useThemeColors} from '../../utils/theme';
import {Styles} from './styles';
import {Colors} from '../../utils/colors';

interface DOBPickerProps {
  label: string;
  Icon: ImageSourcePropType;
  calendarIcon: ImageSourcePropType;
  onDateChange: (date: Date | string) => void;
  mode: 'date' | 'time' | 'datetime';
}

const InputDOB = ({
  label,
  calendarIcon,
  onDateChange,
  mode,
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
    let formattedDate;
    if (mode === 'time') {
      formattedDate = format(date, 'h:mm a');
    } else if (mode === 'date') {
      formattedDate = format(date, 'dd/MM/yyyy');
    } else {
      formattedDate = format(date, 'dd/MM/yyyy h:mm a');
    }
    setDob(formattedDate);
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          style={styles.phoneInput}
          label={label}
          value={dob}
          onPress={showDatePicker}
          textColor={theme.textColor}
          mode="outlined"
          editable={false}
          underlineStyle={{
            display: 'none',
          }}
          outlineStyle={{
            borderColor: Colors.border,
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
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default InputDOB;
