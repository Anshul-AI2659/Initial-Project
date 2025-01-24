import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';
import {useThemeColors} from '../../utils/theme';
import {Styles} from './styles';

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
  iconSource?: ImageSourcePropType;
  buttonStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  isButtonDisabled?: boolean;
}

const CustomButton = ({
  buttonText,
  buttonStyle,
  textStyle,
  iconSource,
  iconStyle,
  onPress,
  isButtonDisabled = false,
}: CustomButtonProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        buttonStyle,
        isButtonDisabled && [styles.disabledButton],
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isButtonDisabled}>
      {iconSource && <Image source={iconSource} style={[styles.icon, iconStyle]} />}
      <Text
        style={[
          styles.submitButtonText,
          textStyle,
          isButtonDisabled && [styles.disabledButtonText],
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;