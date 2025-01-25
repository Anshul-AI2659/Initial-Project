import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
import { vh, vw } from '../../utils/dimension';
import { size } from '../../utils/size';
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
    header: {
      flex:0.14,
      flexDirection: 'row',
      alignItems:'flex-end',
      paddingHorizontal: vw(8),
      paddingBottom: vh(20),
      backgroundColor: Colors.primary,
    },
    Left: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
      tintColor: Colors.White,
    },
    headerText: {
      fontSize: size.headerTitle,
      fontWeight: '600',
      color: Colors.White,
      marginLeft: vw(10),
    },
    subContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: vw(15),
      paddingTop: vh(20),
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.textColor,
    },
    themeContainer: {
      width: '100%',
      height:vh(70),
      alignItems:'center',
      justifyContent: 'space-between',
    },
    footer: {
      width: '100%',
      backgroundColor: theme.backgroundColor,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: vh(30),
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
    themeButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: vh(60),
      paddingHorizontal: vw(15),
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
    },
    tickMark:{
      fontSize:20,
      color:theme.textColor,
    },
  });
