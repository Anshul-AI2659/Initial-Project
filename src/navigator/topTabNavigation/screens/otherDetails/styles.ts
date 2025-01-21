import {StyleSheet} from 'react-native';

export const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems:'center',
      justifyContent:'center',
    },
    text:{
        fontSize:16,
        fontWeight:'500',
    },
  });
