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
      borderRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      backgroundColor: theme.backgroundColor,
      borderColor: Colors.border,
      width: '100%',
      height:vh(50),
      overflow: 'hidden',
      fontSize: size.inputLabel,
    },
    iconButton: {
      // backgroundColor:'red',
      // paddingHorizontal: vw(14),
      width:55,
      borderRightWidth:1,
      // borderColor: Colors.border,
      borderWidth: 1,
      // marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
    },
    // phoneInput: {
    //   width: '100%', 
    //   borderWidth:2,
    //   fontSize: size.inputLabel, 
    //   backgroundColor: theme.backgroundColor,
    //   overflow: 'hidden',
    // },
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
