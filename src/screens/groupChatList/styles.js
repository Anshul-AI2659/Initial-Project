import {StyleSheet, Dimensions} from 'react-native';
import {SCREEN_HEIGHT, vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';
import { Colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop:vh(16),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: vw(16),
  },
  title: {
    color: 'purple',
    fontSize: 20,
    fontWeight: '600',
  },
  userItem: {
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 20,
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    resizeMode:'contain',
  },
  name: {color: 'black', marginLeft: 20, fontSize: 20},
  backImg: {
    width: vw(28),
    height: vw(24),
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:16,
  },
  id: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  bottomArrowImg: {
    width: vw(12),
    height: vw(18),
    resizeMode: 'contain',
    marginLeft: vw(6),
  },
  newMsg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },

  inputText: {
    borderWidth: 1,
    width: vw(343),
    height: vh(44),
    marginTop: vh(26),
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    borderRadius: vh(18),
    paddingHorizontal: vw(14),
    alignSelf: 'center',
    fontSize: size.inputLabel,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(20),
    paddingHorizontal: vw(16),
    justifyContent: 'space-between',
  },
  msgText: {
    fontSize: vw(16),
    fontWeight: '500',
  },
  RequestText: {
    fontSize: vw(16),
    fontWeight: '600',
    color: '#3797EF',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(12),
  },
  profilePic: {
    width: vw(35),
    height: vw(35),
    borderRadius: vw(45),
  },
  chatDetails: {
    marginLeft: vw(15),
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: vw(16),
    fontWeight: '400',
    color: '#000',
  },
  userDetails: {
    fontSize: vw(14),
    color: '#888',
    marginTop: vh(2),
  },
  cameraImg: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  listContainer: {
    marginTop: vh(10),
  },
  emptyContainer: {
    height: SCREEN_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalCancelButton: {
    backgroundColor: 'red',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
