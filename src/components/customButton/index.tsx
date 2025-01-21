import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useThemeColors} from '../../utils/theme';
import {Styles} from './styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isButtonDisabled?: boolean;
}

const CustomButton = ({
  title,
  onPress,
  isButtonDisabled = false,
}: CustomButtonProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  return (
    <TouchableOpacity
      style={[styles.submitButton, isButtonDisabled && [styles.disabledButton]]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isButtonDisabled}>
      <Text
        style={[
          styles.submitButtonText,
          isButtonDisabled && [styles.disabledButtonText],
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
