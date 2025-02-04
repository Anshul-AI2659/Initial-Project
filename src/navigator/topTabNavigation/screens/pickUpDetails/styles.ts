import {StyleSheet} from 'react-native';
import { vw,vh } from '../../../../utils/dimension';
import { Colors } from '../../../../utils/colors';

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
    subContainer:{
      paddingHorizontal:vw(15),
      marginTop:vh(10),
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
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
