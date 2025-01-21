import {Platform, StyleSheet} from 'react-native';
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
      paddingVertical: vh(25),
      paddingHorizontal: vw(20),
      marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
      backgroundColor:theme.backgroundColor,
    },
    backButton: {
        width: vw(40),
        height: vw(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E7E7E7',
        borderRadius: 50,
      },
      Left: {
        width: vw(24),
        height: vw(24),
        resizeMode: 'contain',
      },
    contentHeader: {},
    headerText: {
      fontSize: size.title,
      fontWeight: 'bold',
      color: theme.textColor,
      marginTop:vh(20),
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: size.subTitle,
      color: 'gray',
    },
    telephoneButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
    },

    countryCodeButton: {
      flexDirection: 'row',
      alignItems: 'center',
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
      fontSize: 16,
      fontWeight: '600',
      color: Colors.blue,
    },
  });
