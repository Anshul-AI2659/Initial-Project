import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import {size} from '../../utils/size';
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
    contentContainer: {
      width:'100%',
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
    },
    image: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 1.6,
    },
    title: {
      fontSize: size.headerTitle,
      fontWeight: 'bold',
      color: theme.textColor,
      marginTop: vh(10),
      textAlign: 'center',
    },
    description: {
      fontSize: size.description,
      color: 'grey',
      fontWeight: '300',
      marginTop: vh(20),
      paddingHorizontal: vw(20),
      lineHeight: vh(20),
      textAlign: 'center',
    },
    pagination: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      marginBottom: vh(20),
    },
    dot: {
      width: vw(10),
      height: vw(10),
      borderRadius: 5,
      marginHorizontal: vw(5),
    },
    activeDot: {
      backgroundColor: Colors.primary,
    },
    inactiveDot: {
      backgroundColor: '#C8CFD6',
    },
    nextButton: {
      width: '75%',
      backgroundColor: Colors.primary,
      padding: vw(15),
      borderRadius: 10,
      alignItems: 'center',
      alignSelf:'center',
    },
    nextButtonText: {
      color: Colors.White,
      fontSize: size.button,
      fontWeight: '700',
      textAlign: 'center',
    },
    skipButton: {
      width: '16%',
      padding: vw(5),
      alignItems: 'center',
      marginTop: vh(15),
      alignSelf:'center',
    },
    skipButtonText: {
      color: theme.textColor,
      fontSize: size.button,
      fontWeight: '600',
    },
    scrollContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    slide: {
      width: SCREEN_WIDTH, 

    },
  });
