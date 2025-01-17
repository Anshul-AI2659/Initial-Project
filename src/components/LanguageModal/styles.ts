import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  subContainer:{
    width:'100%',
    height:'100%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: vw(20),
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: vh(10),
  },
  languageButton: {
    padding: vh(15),
    marginVertical:vh(5),
    width: '100%',
  },
  languageText: {
    fontSize: 16,
  },
});
