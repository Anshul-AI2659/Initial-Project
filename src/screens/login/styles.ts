import {StyleSheet,Platform} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

export const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme === 'dark' ? Colors.Black : Colors.White,
    },
    subContainer: {
      paddingVertical: vh(35),
      paddingHorizontal: vw(20),
      marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
      // backgroundColor: 'red',
    },
    contentHeader: {},
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#FFF' : '#000',
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: 15,
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
      fontSize: 16,
      fontWeight: '600',
      color: Colors.blue,
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
      // width: '95%',
      paddingVertical: vh(16),
      fontSize: 15,
      backgroundColor: theme === 'dark' ? '#000' : '#FFF',
      // backgroundColor:'red',
      // marginHorizontal: 8,
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
      fontSize: 15,
      color: '#3797EF',
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
      backgroundColor: 'white',
      borderRadius: vh(10),
      marginTop: vh(30),
      padding: vw(14),
    },
    googleText:{
      fontSize: 15,
      marginLeft: vw(6),
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
      fontSize: 15,
      color: 'white',
      marginLeft: vw(6),
    },
  });
