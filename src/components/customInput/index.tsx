/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  KeyboardTypeOptions,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Styles} from './styles';
import {useThemeColors} from '../../utils/theme';
import {Icons} from '../../assets';

interface CustomInputProps {
  name: string;
  label: string;
  Icon: ImageSourcePropType;
  Error?: boolean;
  setName?: (text: string) => void;
  errorText?: string;
  setError?: (hasError: boolean) => void;
  maxLength?: number;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  togglePasswordVisibility?: () => void;
}

const CustomInput = ({
  name,
  label,
  Icon,
  Error,
  errorText,
  maxLength,
  keyboardType,
  onChangeText,
  isPassword = false,
  isPasswordVisible = false,
  togglePasswordVisibility,
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
          secureTextEntry={isPassword && !isPasswordVisible}
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
          right={
            isPassword && togglePasswordVisibility ? (
              <TextInput.Icon
                icon={isPasswordVisible ? Icons.eye_off : Icons.eye}
                onPress={togglePasswordVisibility}
                color={Error ? 'red' : 'grey'}
              />
            ) : null
          }
        />
      </View>
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInput;
