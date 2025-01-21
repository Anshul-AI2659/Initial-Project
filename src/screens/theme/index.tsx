// import {
//   Switch,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React from 'react';
// import {toggleTheme} from '../../redux/config/ThemeSlice';
// import {useDispatch, useSelector} from 'react-redux';
// import {Styles} from './styles';
// import {useThemeColors} from '../../utils/theme';
// import {Icons} from '../../assets';
// import {useNavigation} from '@react-navigation/native';
// import { useTranslation } from 'react-i18next';

// const Theme = () => {
//   const navigation = useNavigation();
//   const {t} = useTranslation();
//   const dispatch = useDispatch();
//   const currentTheme = useSelector(state => state.ThemeSlice.themeMode);

//   const theme = useThemeColors();
//   const styles = Styles(theme);

//   const handleBack = () => {
//     navigation.goBack();
//   };

//   const handleThemeToggle = () => {
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     dispatch(toggleTheme(newTheme));
//   };

//   const handleSave = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack}>
//           <Image source={Icons.back} style={styles.Left} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>{t('theme.headerTitle')}</Text>
//       </View>
//       <View style={styles.subContainer}>
//         <View style={styles.themeContainer}>
//         <Text style={styles.text}>{t('theme.dark')}</Text>
//         <Switch
//           value={currentTheme === 'dark'}
//           onValueChange={handleThemeToggle}
//           disabled={false}
//           renderActiveText={false}
//           renderInActiveText={false}
//           backgroundActive={'green'}
//           backgroundInactive={'#000'}
//         />
//         </View>
//       </View>
//       <View style={styles.footer}>
//         <TouchableOpacity
//           style={styles.submitButton}
//           onPress={handleSave}
//           activeOpacity={0.7}>
//           <Text style={styles.submitButtonText}>{t('theme.save')}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Theme;

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/config/ThemeSlice';
import {useThemeColors} from '../../utils/theme';
import {Styles} from './styles';
import {Icons} from '../../assets';

const Theme = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.ThemeSlice.themeMode);

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
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('theme.headerTitle')}</Text>
      </View>

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
