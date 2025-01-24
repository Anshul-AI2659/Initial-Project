import React from 'react';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useThemeColors} from '../../utils/theme';
import {Styles} from './styles';
import { Colors } from '../../utils/colors';

interface InputFieldProps {
  name: string;
  setName?: (text: string) => void;
  Error?: boolean;
  label: string;
  onPress?: () => void;
  setError?: (hasError: boolean) => void;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  errorText?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  rightIcon?: ImageSourcePropType;
  showKeyboard?: boolean;
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
  showKeyboard,
}: InputFieldProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);

  return (
    <>
      <TouchableOpacity onPress={onPress} disabled={showKeyboard}>
        <TextInput
          style={[styles.phoneInput]}
          label={label}
          onPress={onPress}
          keyboardType={keyboardType}
          value={name}
          textColor={theme.textColor}
          maxLength={maxLength}
          onChangeText={onChangeText}
          editable={showKeyboard}
          mode="outlined"
          underlineStyle={{
            display: 'none',
          }}
          outlineStyle={{
            borderColor:Colors.border,
          }}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity>
                  <Image source={rightIcon} style={styles.rightIcon} />
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
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default InputField;
