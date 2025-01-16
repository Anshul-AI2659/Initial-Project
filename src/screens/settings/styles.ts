import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
export const Styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: vw(15),
      marginVertical: vw(10),
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      height: '12.7%',
      alignItems: 'flex-end',
      paddingHorizontal: vw(15),
      paddingBottom: vh(20),
      backgroundColor: '#5698D3',
    },
    Left: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
      tintColor: '#ffffff',
    },
    headerText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#ffffff',
      marginLeft:vw(20),
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
      backgroundColor: theme === 'dark' ? '#000' : '#FFF',
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
      backgroundColor: '#FFFFFF',
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
  });
