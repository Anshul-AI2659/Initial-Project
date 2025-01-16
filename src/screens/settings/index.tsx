import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  useColorScheme,
} from 'react-native';
import {Styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useTranslation} from 'react-i18next';
import {Icons} from '../../assets';

interface SettingsProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Settings = ({navigation}: SettingsProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const [imageUri, setImageUri] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };
  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
    refRBSheet.current.close();
  };
  const handleTakePhoto = () => {
    refRBSheet.current.close();
    launchCamera({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const handleRemove = () => {
    refRBSheet.current.close();
    setImageUri('');
  };

  const refRBSheet = useRef<any>();

  const handleMoreOption = () => {
    refRBSheet.current.open();
  };


  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Image source={Icons.back} style={styles.Left} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
        </View>
          <View style={styles.profileSection}>
            <Image
              style={styles.profileImage}
              source={imageUri ? {uri: imageUri} : Icons.accountDark}
            />
            <View style={styles.addImgContainer}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={handleMoreOption}>
                <Image source={Icons.add} style={styles.addImg} />
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
                  {t('profile.button.uploadFromGallery')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleTakePhoto}>
            <View style={styles.container1}>
              <Image source={Icons.camera} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('profile.button.openCamera')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleRemove}>
            <View style={styles.container1}>
              <Image source={Icons.delete} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('profile.button.removeIcon')}
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
