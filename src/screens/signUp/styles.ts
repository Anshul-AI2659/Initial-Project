import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import {size} from '../../utils/size';

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
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: Colors.border,
      borderRightWidth: 1,
      marginRight: vw(4),
    },

    countryCodeButton: {
      flexDirection: 'row',
      alignItems: 'center',
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
    languageButton: {
      width: '30%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: vh(20),
      padding: vw(8),
    },
    languageText: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.textColor,
    },
  });
