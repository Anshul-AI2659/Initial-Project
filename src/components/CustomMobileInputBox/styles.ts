import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';
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
      borderColor: Colors.border,
      backgroundColor: theme.backgroundColor,
      width: '100%',
    },
    flagContainer: {},
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: Colors.border,
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
      width: '59%',
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
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

    flagStyle: {
      fontSize: 18,
      color: theme.textColor,
      marginHorizontal: vw(5),
    },
    codePicker: {
      backgroundColor: Colors.White,
      borderRadius: 10,
      padding: vw(15),
      width: '90%',
    },
    backImg: {
      width: vw(22),
      height: vw(22),
      resizeMode: 'contain',
    },
    flag: {
      fontSize: 20,
      marginRight: 5,
    },
    callingCode: {
      fontSize: 16,
      color: '#000',
    },
    modalContainer: {
      flex: 1,
      paddingHorizontal:vw(20),
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    searchInput: {
      height: vh(40),
      paddingHorizontal: vw(10),
      marginHorizontal:vw(20),
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 15,
      backgroundColor: '#F2F2F2',
    },
    countryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: vh(20),
      paddingHorizontal:vw(20),
      borderBottomColor: '#E0E0E0',
      borderBottomWidth: 1,
    },
    countryText: {
      fontSize: 18,
      marginRight: vw(10),
    },
    countryName: {
      fontSize: 16,
      color: '#333333',
    },
    closeButton: {
      marginTop: vh(20),
      marginHorizontal:vw(20),
      backgroundColor: Colors.primary,
      padding: vw(10),
      borderRadius: 8,
      alignItems: 'center',
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: vh(20),
      paddingHorizontal:vw(20),
    },
    modalText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
