import {StyleSheet,Platform} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import { size } from '../../utils/size';

type Theme = {
  backgroundColor: string;
  textColor: string;
};

export const Styles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      paddingVertical: vh(35),
      paddingHorizontal: vw(20),
      marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
    },
    contentHeader: {},
    headerText: {
      fontSize: size.title,
      fontWeight: 'bold',
      color: theme.textColor,
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: size.subTitle,
      color: 'gray',
    },
    focusedInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(24),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'red',
      width: '100%',
    },
    disabledButton: {
      backgroundColor: Colors.White,
      shadowColor: Colors.Black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    loginContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    accountText: {
      fontSize: 16,
      fontWeight: '400',
      color: 'grey',
    },
    loginText: {
      fontSize: size.button,
      fontWeight: '600',
      color: Colors.primary,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(16),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Colors.border,
      width: '100%',
    },
    phoneInput: {
      width: '74%',
      paddingVertical: vh(16),
      fontSize: 16,
      backgroundColor: theme.backgroundColor,
      overflow: 'hidden',
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
    forgotPass: {
      marginTop: vw(14),
      alignSelf: 'flex-end',
    },
    forgotPassText: {
      fontSize: size.button,
      color: Colors.primary,
    },
    google: {
      height: vh(28),
      width: vw(28),
      marginRight: vw(6),
      resizeMode: 'contain',
    },
    googleView: {
      width: '85%',
      borderWidth:1,
      borderColor:Colors.border,
      flexDirection: 'row',
      paddingHorizontal:vw(60),
      alignContent:'center',
      backgroundColor: theme.backgroundColor,
      borderRadius: vh(10),
      marginTop: vh(15),
      paddingVertical:vh(10),
    },
    googleText:{
      width: '85%',
      fontSize: size.button,
      fontWeight:'400',
      marginLeft: vw(12),
      color:theme.textColor,
    },
    facebookView: {
      width: '85%',
      elevation: vh(10),
      paddingHorizontal:vw(50),
      alignContent:'center',
      flexDirection: 'row',
      shadowColor: '#C3C3C3',
      shadowOpacity: 5,
      shadowRadius: 3,
      backgroundColor: '#4267B2',
      borderRadius: vh(10),
      marginTop: vh(15),
      paddingVertical: vw(10),
    },
    facebookText: {
      width: '85%',
      fontSize: size.button,
      fontWeight:'400',
      marginLeft: vw(12),
      color:Colors.White,
    },
  });
