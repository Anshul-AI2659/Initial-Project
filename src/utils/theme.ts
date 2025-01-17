import {RootState} from '../redux/store';
import {lightThemeColors, darkThemeColors} from './colors';
import {useSelector} from 'react-redux';

export const useThemeColors = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.ThemeSlice.themeMode,
  );
  return currentTheme === 'dark' ? darkThemeColors : lightThemeColors;
};
