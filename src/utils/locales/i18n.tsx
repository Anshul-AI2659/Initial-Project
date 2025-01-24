import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {English} from './translations/en';
import {Spanish} from './translations/es';
import {Hindi} from './translations/hi';
import {French} from './translations/fr';
import {Russian} from './translations/ru';
import {Urdu} from './translations/ur';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    lng: 'English',
    fallbackLng: 'English',
    resources: {
      English: {translation: English},
      Spanish: {translation: Spanish},
      Hindi: {translation: Hindi},
      French: {translation: French},
      Russian: {translation: Russian},
      Urdu: {translation: Urdu},
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['asyncStorage'],
      caches: ['asyncStorage'],
    },
    react: {
      useSuspense: false,
    },
    initImmediate: false,
  })

  .then(() => {
    AsyncStorage.getItem('i18n-locale').then(storedLang => {
      if (storedLang) {
        i18n.changeLanguage(storedLang);

        AsyncStorage.getItem('i18n-rtl').then(storedRTL => {
          const isRTL = storedRTL === 'true';

          if (I18nManager.isRTL !== isRTL) {
            I18nManager.forceRTL(isRTL);
            RNRestart.Restart();
          }
        });
      }
    });
  });
i18n.on('languageChanged', lng => {
  AsyncStorage.setItem('i18n-locale', lng);
});

export default i18n;
