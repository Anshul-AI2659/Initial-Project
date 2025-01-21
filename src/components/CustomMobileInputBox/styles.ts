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
      borderRadius: 10,
      borderColor: '#ccc',
      backgroundColor: theme.backgroundColor,
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
      width: '60%',
      borderRadius: 10,
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
      marginTop: vh(4),
      textAlign: 'left',
    },
    modalHeader: {
      flexDirection: 'row',
      marginTop: vh(50),
      marginBottom: vh(10),
      paddingHorizontal:vw(10),
    },
    modalText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:vw(20),
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 8,
      backgroundColor: '#f1f1f1',
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'black',
      fontWeight: 'bold',
    },
    flagStyle: {
      fontSize: 24,
      color: theme.textColor,
      marginHorizontal: vw(5),
    },
    codePicker: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 15,
      width: '90%',
    },
    backImg:{
      width:vw(22),
      height:vw(22),
      resizeMode:'contain',
    },
  });
