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
  icon2?: ImageSourcePropType;
  onIcon2Press?: () => void;
  showIcon2?: boolean;
  showBackButton?: boolean;
  backButtonIcon?: ImageSourcePropType;
  onBackPress?: () => void;
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  Icon1?: ImageSourcePropType;
  onIcon1Press?: () => void;
  showIcon1?: boolean;
}

const Header = ({
  title,
  icon2,
  onIcon2Press,
  headerStyle,
  headerTextStyle,
  showIcon2 = false,
  showBackButton = false,
  backButtonIcon,
  onBackPress,
  Icon1,
  onIcon1Press,
  showIcon1 = false,
}: HeaderProps) => {
  return (
    <View style={headerStyle}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={backButtonIcon} style={styles.backIcon} />
        </TouchableOpacity>
      )}

      <Text style={headerTextStyle}>{title}</Text>

      <View style={styles.rightIconsContainer}>
        {showIcon1 && Icon1 && onIcon1Press && (
          <TouchableOpacity onPress={onIcon1Press} style={styles.icon1Button}>
            <Image source={Icon1} style={styles.Icon1} />
          </TouchableOpacity>
        )}

        {showIcon2 && icon2 && onIcon2Press && (
          <TouchableOpacity onPress={onIcon2Press}>
            <Image source={icon2} style={styles.Icon2} />
          </TouchableOpacity>
        )}
      </View>
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
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon1Button: {
    marginRight: 15,
  },
  Icon1: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: Colors.White,
  },
  Icon2: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  backButton: {
    paddingHorizontal: vw(10),
    marginRight: vw(10),
  },
  backIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: Colors.White,
  },
});

export default Header;
