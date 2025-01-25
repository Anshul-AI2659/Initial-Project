import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import {size} from '../../utils/size';

interface HeaderProps {
  title: string;
  icon?: ImageSourcePropType;
  onPress?: () => void; // Optional right icon press handler
  showRightIcon?: boolean;
  showBackButton?: boolean;
  backButtonIcon?: ImageSourcePropType;
  onBackPress?: () => void;
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
}

const Header = ({
  title,
  icon,
  onPress,
  headerStyle,
  headerTextStyle,
  showRightIcon = false,
  showBackButton = false,
  backButtonIcon,
  onBackPress,
}: HeaderProps) => {
  return (
    <View style={headerStyle}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={backButtonIcon} style={styles.leftIcon} />
        </TouchableOpacity>
      )}

      <Text style={headerTextStyle}>{title}</Text>

      {showRightIcon && icon && onPress && (
        <TouchableOpacity onPress={onPress}>
          <Image source={icon} style={styles.rightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '14%',
    alignItems: 'flex-end',
    paddingHorizontal: vw(15),
    paddingBottom: vh(20),
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontSize: size.headerTitle,
    fontWeight: '600',
    color: Colors.White,
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  //   backButton: {
  //     marginRight: 10, // Adjust spacing as needed
  //   },
  //   leftIcon: {
  //     width: 24,
  //     height: 24,
  //   },
  backButton: {
    paddingHorizontal: vw(10),
    marginRight: vw(10),
  },
  leftIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: Colors.White,
  },
});

export default Header;
