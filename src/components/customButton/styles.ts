import {StyleSheet} from 'react-native';
import { Colors } from '../../utils/colors';
import {vh} from '../../utils/dimension';
import {size} from '../../utils/size';

export const Styles = (theme: any) =>
  StyleSheet.create({
    disabledButton: {
      backgroundColor: theme.backgroundColor,
      shadowColor: theme.textColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    submitButton: {
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%',
      marginTop: vh(44),
      paddingVertical: vh(16),
      borderRadius: 10,
    },
    submitButtonText: {
      color: 'white',
      fontSize: size.button,
      fontWeight: 'bold',
    },
    disabledButtonText: {
      color: '#E2E2E2',
      fontSize: size.button,
      fontWeight: 'bold',
    },
  });
