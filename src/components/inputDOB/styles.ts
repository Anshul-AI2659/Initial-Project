import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import { size } from '../../utils/size';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
      borderRadius: 10,
      backgroundColor:theme.backgroundColor,
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
      tintColor: 'grey',
    },
    phoneInput: {
      width: '100%',
      height: vh(50),
      fontSize: size.inputLabel,
      marginTop: vh(10),
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
    calendarImg: {
      width: vw(22),
      height: vw(22),
      resizeMode: 'contain',
      tintColor: 'grey',
    },
  });
