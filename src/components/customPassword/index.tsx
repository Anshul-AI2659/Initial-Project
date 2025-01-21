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
import {Icons} from '../../assets';
import {useThemeColors} from '../../utils/theme';

interface CustomPasswordInputProps {
  name: string;
  label: string;
  Icon: ImageSourcePropType;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  Error?: boolean;
  errorText?: any;
  maxLength?: number;
  keyboardType: any;
  onChangeText: (text: string) => void;
}

const CustomPasswordInputBox = ({
  name,
  label,
  Icon,
  isPasswordVisible,
  togglePasswordVisibility,
  Error,
  errorText,
  maxLength,
  keyboardType,
  onChangeText,
}: CustomPasswordInputProps) => {
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
          secureTextEntry={!isPasswordVisible}
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

        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={isPasswordVisible ? Icons.eye_off : Icons.eye}
            style={styles.eyeImg}
          />
        </TouchableOpacity>
      </View>

      {Error &&
        errorText.map((message: any, index: any) => (
          <Text key={index} style={styles.errorText}>
            {message}
          </Text>
        ))}
    </>
  );
};

export default CustomPasswordInputBox;
