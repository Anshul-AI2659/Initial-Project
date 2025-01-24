import {StyleSheet} from 'react-native';
import { Colors } from '../../utils/colors';
import {vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';


type Theme = {
  backgroundColor: string;
  textColor: string;
};

export const Styles = (theme: Theme) =>
  StyleSheet.create({
    disabledButton: {
      backgroundColor: theme.backgroundColor,
      alignItems:'center',
      justifyContent:'center',
      alignSelf: 'center',
      width: '85%',
      marginTop: vh(44),
      borderRadius: 10,
      shadowColor: theme.textColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
      paddingVertical:vh(15),
    },
    submitButton: {
      flexDirection:'row',
      backgroundColor: Colors.primary,
      alignItems:'center',
      justifyContent:'center',
      alignSelf: 'center',
      width: '85%',
      marginTop: vh(44),
      borderRadius: 10,
      paddingVertical:vh(15),

    },
    submitButtonText: {
      color: Colors.White,
      fontSize: size.button,
      fontWeight: 'bold',
    },
    disabledButtonText: {
      color: Colors.disableButton,
      fontSize: size.button,
      fontWeight: 'bold',
    },
    icon:{
      width:vw(28),
      height:vw(28),
      resizeMode:'contain',
    }
  });
