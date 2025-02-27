import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';

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
    container2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: vw(15),
      marginVertical: vw(10),
    },
    header: {
      flex:0.35,
      flexDirection: 'row',
      alignItems:'flex-end',
      paddingHorizontal: vw(8),
      paddingBottom: vh(20),
      backgroundColor: Colors.primary,
    },
    backButton: {
      paddingHorizontal: vw(10),
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
    profileSection: {
      alignItems: 'center',
      marginTop: vh(30),
    },
    profileImage: {
      width: vw(120),
      height: vw(120),
      borderRadius: 100,
      marginBottom: vh(8),
    },
    addImgContainer: {
      position: 'absolute',
      bottom: 15,
      right: 130,
      backgroundColor: theme.backgroundColor,
      padding: vw(2),
      borderRadius: 20,
    },
    addButton: {
      backgroundColor: '#486284',
      borderRadius: 20,
      padding: vw(3),
    },
    addImg: {
      width: vw(24),
      height: vw(24),
      tintColor: 'white',
      resizeMode: 'contain',
    },
    bgColor: {
      flex: 1,
      backgroundColor: Colors.White,
    },
    marginSide: {
      marginHorizontal: vw(20),
    },
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageStyleView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageSize: {
      height: vw(27),
      width: vw(27),
    },
    iconImageSize: {
      height: vw(26),
      width: vw(30),
      resizeMode: 'contain',
      borderRadius: 15,
      marginHorizontal: vw(10),
    },
    textArrange: {
      justifyContent: 'center',
    },
    name: {
      marginEnd: vh(10),
      fontSize: 16,
      fontWeight: '500',
      color: 'black',
    },
    generalText: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: vw(13),
      color: theme.textColor,
    },
    firstContainer: {
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: 10,
      marginHorizontal: vw(15),
      marginTop: vh(15),
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
    rightIcon: {
      width: vw(16),
      height: vw(16),
      tintColor: theme.textColor,
      resizeMode: 'contain',
    },
    languageButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: vh(60),
      paddingHorizontal: vw(15),
    },
    contentContainer: {
      marginTop: vh(30),
    },
    secondContainer: {
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: 10,
      marginHorizontal: vw(15),
      marginTop: vh(15),
    },
    privacyPolicyButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: vh(60),
      paddingHorizontal: vw(15),
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
    },
    termsButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: vh(60),
      paddingHorizontal: vw(15),
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
    },
    logoutButton: {
      width: '100%',
      height: vh(60),
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    text: {
      fontSize: 16,
      fontWeight: '400',
      color: theme.textColor,
    },
    logoutText: {
      fontSize: 16,
      fontWeight: '400',
      color: 'red',
    },
  });
