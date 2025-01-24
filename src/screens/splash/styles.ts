import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/dimension';
import { Colors } from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  splashlogo: {
    width: SCREEN_WIDTH / 1.5,
    height: SCREEN_HEIGHT / 2,
    resizeMode:'contain',
  },
});
