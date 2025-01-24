import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Dimensions,
  I18nManager,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNRestart from 'react-native-restart';
import { Icons } from '../../assets';
import LanguageModal from '../../components/LanguageModal';
import i18n from '../../utils/locales/i18n';
import { useThemeColors } from '../../utils/theme';
import { StackParamList } from '../../utils/types';
import { Styles } from './styles';
import { ScreenNames } from '../../utils/screenNames';

interface SettingsProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Settings = ({navigation}: SettingsProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [languages, setLanguages] = useState([
    {code: 'English', name: 'English'},
    {code: 'Spanish', name: 'Español'},
    {code: 'Hindi', name: 'हिंदी'},
    {code: 'French', name: 'Français'},
    {code: 'Russian', name: 'Русский'},
    {code: 'Urdu', name: 'اردو'},
  ]);

  const [imageUri, setImageUri] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const changeLanguage = async (langCode: string | undefined) => {
    const rtlLanguages = ['Urdu'];
    const isRTL = rtlLanguages.includes(langCode || '');

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);

      await AsyncStorage.setItem('i18n-locale', langCode || '');
      await AsyncStorage.setItem('i18n-rtl', isRTL.toString());

      RNRestart.Restart();
    } else {
      i18n.changeLanguage(langCode);
      toggleModal();
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userToken');

              navigation.reset({
                index: 0,
                routes: [{name: ScreenNames.Login}],
              });
            } catch (error) {
              console.error('Error removing token', error);
            }
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, (response: ImagePickerResponse) => {
      if (response.assets && response.assets[0] && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    });
    refRBSheet.current?.close();
  };
  const handleTakePhoto = () => {
    refRBSheet.current?.close();
    launchCamera({mediaType: 'photo', quality: 1}, (response: ImagePickerResponse) => {
      if (response.assets && response.assets[0] && response.assets[0].uri) {
        setImageUri(response.assets[0].uri); // Only set if uri is defined
      }
    });
  };
  const handleRemove = () => {
    refRBSheet.current?.close();
    setImageUri('');
  };

  const refRBSheet =useRef<React.ElementRef<typeof RBSheet>>(null);;

  const handleMoreOption = () => {
    refRBSheet.current?.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('settings.headerTitle')}</Text>
      </View>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={imageUri ? {uri: imageUri} : Icons.accountDark}
        />
        <View style={styles.addImgContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleMoreOption}>
            <Image source={Icons.add} style={styles.addImg} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.generalText}>{t('settings.general')}</Text>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.themeButton}
            onPress={() => {
              navigation.navigate(ScreenNames.theme);
            }}
            activeOpacity={0.7}>
            <Text style={styles.text}>{t('settings.theme')}</Text>
            <Image source={Icons.right} style={styles.rightIcon} />
          </TouchableOpacity>
          <LanguageModal
            modalVisible={modalVisible}
            toggleModal={toggleModal}
            title="Select Language"
            languages={languages}
            changeLanguage={changeLanguage}
          />
          <TouchableOpacity
            style={styles.languageButton}
            onPress={toggleModal}
            activeOpacity={0.7}>
            <Text style={styles.text}>{t('settings.language')}</Text>
            <Image source={Icons.right} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.generalText}>{t('settings.content')}</Text>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            style={styles.privacyPolicyButton}
            activeOpacity={1}>
            <Text style={styles.text}>{t('settings.privacy')}</Text>
            <Image source={Icons.right} style={styles.rightIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.termsButton} activeOpacity={1}>
            <Text style={styles.text}>{t('settings.terms')}</Text>
            <Image source={Icons.right} style={styles.rightIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.7}
            onPress={handleLogout}>
            <Text style={styles.logoutText}>{t('settings.button.logout')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        draggable={true}
        height={Dimensions.get('window').height / 3.0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#E5E5E5',
            width: '12%',
          },
          container: {
            borderRadius: 20,
            marginTop: 'auto',
          },
        }}>
        <View>
          <TouchableOpacity style={styles.container2} onPress={openGallery}>
            <View style={styles.container1}>
              <Image source={Icons.gallery} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('settings.button.uploadFromGallery')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleTakePhoto}>
            <View style={styles.container1}>
              <Image source={Icons.camera} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('settings.button.openCamera')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleRemove}>
            <View style={styles.container1}>
              <Image source={Icons.delete} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('settings.button.removeIcon')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};
export default Settings;
