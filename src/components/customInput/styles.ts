import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import { Colors } from '../../utils/colors';
type Theme = {
  backgroundColor: string;
  textColor: string;
};

export const Styles = (theme: Theme) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(16),
      borderWidth: 1,
      backgroundColor: theme.backgroundColor,
      borderRadius: 10,
      borderColor: Colors.border,
      width: '100%',
    },
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: Colors.border,
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
    },
    phoneInput: {
      width: '82%', 
      fontSize: size.inputLabel, 
      backgroundColor: theme.backgroundColor,
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: size.error,
      marginTop: vw(4),
      textAlign: 'left',
    },
    eyeImg: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
      tintColor:'grey',
      marginTop: vh(7),
    },
  });
