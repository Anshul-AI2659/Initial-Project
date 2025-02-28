import {StyleSheet} from 'react-native';
import {vh, vw, SCREEN_WIDTH} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: vw(10),
    paddingBottom: vh(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: vw(26),
    height: vw(26),
    resizeMode: 'contain',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoTextContainer: {
    padding:vw(10),
    marginLeft: vw(10),
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  headerIconContainer: {
    width: SCREEN_WIDTH / 3.8,
    flexDirection: 'row',
    padding: vh(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  telephoneIcon: {
    width: vw(23),
    height: vw(23),
    resizeMode: 'contain',
  },
  videoIcon: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  messageIconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  sendContainer: {
    alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: 'red',
  },
  sendIcon: {
    width: vw(22),
    height: vw(22),
    resizeMode: 'contain',
    marginLeft: vw(10),
  },

  inputToolbar: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  chatImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  messageWrapper: {
    marginBottom: 10,
    position: 'relative',
  },
  senderEmojiOnBubble: {
    position: 'absolute',
    marginRight: 6,
    bottom: -8,
    right: -1,
    fontSize: 20,
  },
  receiverEmojiOnBubble: {
    position: 'absolute',
    bottom: -15,
    left: 50,
    fontSize: 20,
  },
  senderName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 62,
  },
  groupNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  modalHeader: {
    paddingTop: vh(16),
    paddingBottom:vh(10),
    paddingHorizontal: vw(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeModalButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:vw(10),
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: vw(20),
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(18),
    borderBottomColor: '#ccc',
  },
  accountIcon: {
    width: vw(28),
    height: vw(28),
    resizeMode: 'contain',
  },

  memberName: {
    fontSize: 18,
    marginLeft: vw(10),
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
