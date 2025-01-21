import {StyleSheet,Platform} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import { size } from '../../utils/size';

export const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      paddingVertical: vh(35),
      paddingHorizontal: vw(20),
      marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
      // backgroundColor: 'red',
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
      // marginTop: vh(10),
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
      borderColor: '#ccc',
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
      borderColor: '#ccc',
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
      elevation: vh(10),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: '#C3C3C3',
      shadowOpacity: 5,
      shadowRadius: 3,
      backgroundColor: theme.backgroundColor,
      borderRadius: vh(10),
      marginTop: vh(30),
      padding: vw(14),
    },
    googleText:{
      fontSize: size.button,
      marginLeft: vw(6),
      color:theme.textColor,
    },
    facebookView: {
      elevation: vh(10),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: '#C3C3C3',
      shadowOpacity: 5,
      shadowRadius: 3,
      backgroundColor: '#4267B2',
      borderRadius: vh(10),
      marginTop: vh(20),
      padding: vw(14),
    },
    facebookText: {
      fontSize: size.button,
      color: 'white',
      marginLeft: vw(6),
    },
  });
