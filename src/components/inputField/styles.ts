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
      width: '100%',
    },
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
    },
    phoneInput: {
      width: '100%',
      height: vh(50),
      fontSize: 15,
      color:theme.backgroundColor,
      marginTop: vh(10),
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: vw(4),
      textAlign: 'left',
    },
    rightIcon: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    textColor: {
      color: theme.textColor,
    },
  });
