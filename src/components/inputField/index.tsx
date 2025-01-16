/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, useColorScheme, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Styles} from './styles';

interface InputFieldProps {
  name: any;
  setName?: (text: string) => void;
  Error?: boolean;
  label: string;
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
  Error,
  onChangeText,
  errorText,
  maxLength,
  keyboardType,
  rightIcon,
}: InputFieldProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);
  return (
    <>
      <TextInput
        style={[styles.phoneInput]}
        label={label}
        keyboardType={keyboardType}
        value={name}
        maxLength={maxLength}
        textColor={theme === 'dark' ? '#FFF' : '#000'}
        onChangeText={onChangeText}
        mode="outlined"
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
        outlineStyle={{
          borderColor: '#cccccc',
        }}
        right={
          <TextInput.Icon
            icon={() => (
              <TouchableOpacity>
                <Image
                  source={rightIcon} // Path to your custom icon
                  style={styles.rightIcon} // Adjust the size
                  resizeMode="contain" // Ensure the icon is contained within the box
                />
              </TouchableOpacity>
            )}
          />
        }
      />
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default InputField;
