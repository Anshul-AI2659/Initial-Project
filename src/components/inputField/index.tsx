/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Styles} from './styles';
import {useThemeColors} from '../../utils/theme';

interface InputFieldProps {
  name: any;
  setName?: (text: string) => void;
  Error?: boolean;
  label: string;
  onPress?: any;
  setError?: (hasError: boolean) => void;
  onChangeText: any;
  onFocus?: any;
  onBlur?: any;
  errorText?: any;
  maxLength?: any;
  keyboardType: any;
  rightIcon?: any;
}

const InputField = ({
  name,
  label,
  onPress,
  Error,
  onChangeText,
  errorText,
  maxLength,
  keyboardType,
  rightIcon,
}: InputFieldProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  console.log('Themeeeee===', theme);
  return (
    <>
      <TextInput
        style={[styles.phoneInput]}
        label={label}
        onPress={onPress}
        keyboardType={keyboardType}
        value={name}
        textColor={theme.textColor}
        maxLength={maxLength}
        onChangeText={onChangeText}
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
              <TouchableOpacity>
                <Image
                  source={rightIcon}
                  style={styles.rightIcon}
                  resizeMode="contain"
                />
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
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default InputField;
