import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {vh} from '../../utils/dimension';
import { Colors } from '../../utils/colors';
import { useThemeColors } from '../../utils/theme';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isButtonDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isButtonDisabled = false,
}) => {
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

const Styles = (theme: any) =>
  StyleSheet.create({
    disabledButton: {
      backgroundColor: theme.backgroundColor,
      shadowColor: theme.textColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    submitButton: {
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%',
      marginTop: vh(44),
      paddingVertical: vh(16),
      borderRadius: 10,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    disabledButtonText: {
      color: '#E2E2E2',
    },
  });

export default CustomButton;
