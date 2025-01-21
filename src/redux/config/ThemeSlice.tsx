import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ThemeState {
  themeMode: 'light' | 'dark' | 'systemDefault';
}

const initialState: ThemeState = {
  themeMode: 'systemDefault',
};

const saveThemeToStorage = async (
  theme: 'light' | 'dark' | 'systemDefault',
) => {
  try {
    await AsyncStorage.setItem('themeMode', theme);
  } catch (error) {
    console.error('Failed to save the theme to storage:', error);
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (
      state,
      action: PayloadAction<'light' | 'dark' | 'systemDefault'>,
    ) => {
      state.themeMode = action.payload;
      saveThemeToStorage(action.payload);
    },

    setTheme: (
      state,
      action: PayloadAction<'light' | 'dark' | 'systemDefault'>,
    ) => {
      state.themeMode = action.payload;
      saveThemeToStorage(action.payload);
    },

    loadThemeFromStorage: (
      state,
      action: PayloadAction<'light' | 'dark' | 'systemDefault'>,
    ) => {
      state.themeMode = action.payload;
    },
  },
});

export const {toggleTheme, setTheme, loadThemeFromStorage} = themeSlice.actions;
export default themeSlice.reducer;
