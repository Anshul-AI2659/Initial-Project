import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Styles} from './styles';
import {useThemeColors} from '../../utils/theme';

interface CustomInputProps {
  name: any;
  setName?: (text: string) => void;
  Icon: ImageSourcePropType;
  Error?: boolean;
  label: string;
  setError?: (hasError: boolean) => void;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  errorText?: string;
  maxLength?: number;
  keyboardType: any;
}

const CustomInputBox = ({
  name,
  label,
  Icon,
  Error,
  onChangeText,
  errorText,
  maxLength,
  keyboardType,
}: CustomInputProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  return (
    <>
      <View
        style={[styles.inputContainer, Error ? styles.errorContainer : null]}>
        <TouchableOpacity activeOpacity={1} style={styles.iconButton}>
          <Image
            source={Icon}
            style={[styles.iconStyle, {tintColor: Error ? 'red' : 'grey'}]}
          />
        </TouchableOpacity>
        <TextInput
          style={[styles.phoneInput]}
          label={label}
          keyboardType={keyboardType}
          value={name}
          maxLength={maxLength}
          textColor={theme.textColor}
          onChangeText={onChangeText}
          mode="flat"
          underlineStyle={{
            display: 'none',
          }}
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
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInputBox;
