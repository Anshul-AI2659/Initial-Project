import {StyleSheet} from 'react-native';
type Theme = {
  backgroundColor: string;
  textColor: string;
};

export const Styles = (theme: Theme) =>
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
