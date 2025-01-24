import { StyleSheet } from "react-native";
import Theme from "../../screens/theme";

type Theme = {
    backgroundColor: string;
    textColor: string;
  };
  
  export const Styles = (theme: Theme) =>
    StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      input: {
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: theme.textColor,
        fontSize: 18,
      },
    });