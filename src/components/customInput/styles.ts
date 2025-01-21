import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import { size } from '../../utils/size';

export const Styles = (theme: any) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(16),
      borderWidth: 1,
      backgroundColor:theme.backgroundColor,
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
      width: '82%',
      // width: '95%',
      fontSize: size.inputLabel,
      backgroundColor: theme.backgroundColor,
      // backgroundColor:'red',
      // marginHorizontal: 8,
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
  });
