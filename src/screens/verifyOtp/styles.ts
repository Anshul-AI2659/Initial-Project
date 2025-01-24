import {Platform, StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';
import Theme from '../theme';

type Theme = {
  backgroundColor: string;
  textColor: string;
};

export const Styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      paddingVertical: vh(25),
      paddingHorizontal: vw(20),
      marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
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
    titleContainer: {
      fontWeight: 'bold',
      marginTop: vh(20),
    },
    title: {
      fontSize: size.title,
      color: theme.textColor,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 15,
      color: '#666',
    },
    mobileText: {
      fontSize: 16,
      color: theme.textColor,
      fontWeight: 'bold',
    },
    error: {
      color: 'red',
      marginTop: 10,
    },
    resendContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    resendText: {
      fontSize: 16,
      color: '#666',
    },
    resendLink: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    timerContainer: {
      alignItems: 'center',
      marginTop: 10,
    },
    timerText: {
      fontSize: 16,
      color: '#666',
    },
  });
