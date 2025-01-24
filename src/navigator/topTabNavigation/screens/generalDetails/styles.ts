import {StyleSheet} from 'react-native';
import { vw,vh } from '../../../../utils/dimension';
import { Colors } from '../../../../utils/colors';

type Theme = {
  backgroundColor: string;
  textColor: string;
};
export const Styles = (theme: Theme) =>
  StyleSheet.create({
    safeareastyle: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {},
    contentHeader: {
      marginTop: vh(10),
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.textColor,
    },

    listContainer: {
      flex: 1,
      paddingHorizontal: vw(20),
      marginTop: vh(14),
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: vh(4),
    },
    checkbox: {
      paddingVertical: vh(10),
    },
    leftText: {
      marginLeft: vw(8),
      fontSize: 16,
      color: theme.textColor,
    },
    checkedText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    checkedBox: {
      width: vw(20),
      height: vw(20),
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    tick: {
      color: Colors.White,
      fontSize: 15,
      fontWeight: 'bold',
    },
    uncheckedBox: {
      width: vw(20),
      height: vw(20),
      borderWidth: 2,
      borderColor: Colors.Black,
      backgroundColor: Colors.White,
      borderRadius: 5,
    },
    footer: {
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: vh(14),
    },
    submitButton: {
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%',
      paddingVertical: vh(10),
      borderRadius: 10,
    },
    submitButtonText: {
      color: Colors.White,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
