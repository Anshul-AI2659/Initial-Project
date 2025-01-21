import {useColorScheme} from 'react-native';
import {RootState} from '../redux/store';
import {lightThemeColors, darkThemeColors} from './colors';
import {useSelector} from 'react-redux';

export const useThemeColors = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.ThemeSlice.themeMode,
  );

  const systemTheme = useColorScheme();

  if (currentTheme === 'dark') {
    return darkThemeColors;
  } else if (currentTheme === 'light') {
    return lightThemeColors;
  } else if (currentTheme === 'systemDefault') {
    return systemTheme === 'dark' ? darkThemeColors : lightThemeColors;
  }

  return lightThemeColors;
};
