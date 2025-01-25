import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/config/ThemeSlice';
import {useThemeColors} from '../../utils/theme';
import {Styles} from './styles';
import {Icons} from '../../assets';
import Header from '../../components/customHeader';

interface RootState {
  ThemeSlice: {
    themeMode: string;
  };
}

const Theme = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.ThemeSlice.themeMode,
  );

  const theme = useThemeColors();
  const styles = Styles(theme);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleThemeToggle = (newTheme: 'light' | 'dark' | 'systemDefault') => {
    dispatch(toggleTheme(newTheme));
  };

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        title={t('theme.headerTitle')}
        headerStyle={styles.header}
        headerTextStyle={styles.headerText}
        showBackButton={true}
        backButtonIcon={Icons.back}
        onBackPress={handleBack}
      />
      <View style={styles.subContainer}>
        <View style={styles.themeContainer}>
          <TouchableOpacity
            style={styles.themeButton}
            onPress={() => handleThemeToggle('systemDefault')}
            activeOpacity={0.8}>
            <Text style={[styles.text]}>{t('theme.system')}</Text>
            {currentTheme === 'systemDefault' && (
              <Text style={styles.tickMark}>✓</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.themeButton}
            onPress={() => handleThemeToggle('light')}
            activeOpacity={0.8}>
            <Text style={[styles.text]}>{t('theme.light')}</Text>
            {currentTheme === 'light' && <Text style={styles.tickMark}>✓</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.themeButton}
            onPress={() => handleThemeToggle('dark')}
            activeOpacity={0.8}>
            <Text style={[styles.text]}>{t('theme.dark')}</Text>
            {currentTheme === 'dark' && <Text style={styles.tickMark}>✓</Text>}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSave}
          activeOpacity={0.7}>
          <Text style={styles.submitButtonText}>{t('theme.save')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Theme;
