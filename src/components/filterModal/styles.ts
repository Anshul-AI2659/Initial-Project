import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, vh, vw} from '../../utils/dimension';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  topContainer: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    backgroundColor: '#000',
    padding: vw(12),
    marginBottom: vh(10),
    borderRadius: 50,
    // iOS shadow
    shadowColor: '#000', // Black shadow color
    shadowOffset: {width: 0, height: 2}, // Offset to make the shadow visible below and around the button
    shadowOpacity: 0.3, // Adjust shadow opacity for iOS
    shadowRadius: 4, // Adjust shadow blur for iOS

    // Android shadow
    elevation: 5,
  },
  closeIcon: {
    width: vw(14),
    height: vw(14),
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  mainContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(30),
    paddingVertical: vh(16),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resetText: {
    fontSize: 16,
    color: 'red',
  },
  subContainer: {
    paddingHorizontal: vw(30),
    paddingVertical: vh(10),
    backgroundColor: '#ABABAB',
  },
  priceRange: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sliderContainer: {
    height: vh(40),
  },
  selectedProgress: {
    height: vh(6),
    backgroundColor: 'black',
  },
  progressTrack: {
    height: vh(6),
    borderRadius: 5,
  },
  progressMarker: {
    width: vw(22),
    height: vh(22),
    marginTop: vh(5),
    alignSelf: 'flex-end',
    backgroundColor: 'black',
  },
  rangeContainer: {
    flexDirection: 'row',
    backgroundColor: '#ABABAB',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  choiceContainer: {
    width: '100%',
    marginTop: vh(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    width: vw(95),
    paddingVertical: vh(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  selectedButton: {
    width: vw(95),
    paddingVertical: vh(8),
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#000',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  selectedButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    marginTop: vh(10),
  },
  categoryInput: {
    width: vw(200),
    height: vh(40),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: vw(10),
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: vh(10),
  },
  categoryText: {
    fontSize: 16,
  },
  applyButton: {
    width: SCREEN_WIDTH / 1.25,
    backgroundColor: '#000',
    paddingVertical: vh(14),
    marginTop: vh(16),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
