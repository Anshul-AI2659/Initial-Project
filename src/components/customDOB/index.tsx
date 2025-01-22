import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import {Styles} from './styles';
import {useThemeColors} from '../../utils/theme';

interface DOBPickerProps {
  label: string;
  Icon: ImageSourcePropType;
  calendarIcon: ImageSourcePropType;
  onDateChange: (selectedDate: Date | undefined) => void;
  errorText?: string;
  placeholderText?: string;
}

const DOBPicker: React.FC<DOBPickerProps> = ({
  label,
  Icon,
  calendarIcon,
  onDateChange,
  errorText,
}) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const [dob, setDob] = useState<string | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    const formattedDate = format(date, 'dd/MM/yyyy');
    setDob(formattedDate);
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.inputContainer}
        activeOpacity={0.7}
        onPress={showDatePicker}>
        <TouchableOpacity activeOpacity={1} style={styles.iconButton}>
          <Image source={Icon} style={styles.iconStyle} />
        </TouchableOpacity>

        <TextInput
          label={label}
          value={dob}
          textColor={theme.textColor}
          onPress={showDatePicker}
          editable={false}
          mode="flat"
          right={
            <TextInput.Icon
              icon={() => (
                <Image source={calendarIcon} style={styles.iconStyle} />
              )}
            />
          }
          underlineColor="transparent"
          style={styles.phoneInput}
          theme={{
            colors: {
              primary: 'gray',
              placeholder: 'grey',
              background: 'transparent',
              disabled: 'transparent',
            },
          }}
        />
      </TouchableOpacity>

      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default DOBPicker;
