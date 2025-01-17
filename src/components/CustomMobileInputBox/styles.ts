import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';

export const Styles = (theme: any) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(16),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ccc',
      backgroundColor:theme.backgroundColor,
      width: '100%',
    },
    flagContainer: {},
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      tintColor: 'grey',
      resizeMode: 'contain',
    },
    countryCodeButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    countryCodeText: {
      fontSize: 16,
      color: theme.textColor,
    },
    phoneInputMobile: {
      width: '63%',
      borderRadius: 10,
      fontSize: 15,
      backgroundColor: theme.backgroundColor,
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: vh(4),
      textAlign: 'left',
    },
  });
