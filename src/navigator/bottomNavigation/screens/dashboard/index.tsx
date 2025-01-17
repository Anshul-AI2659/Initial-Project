import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icons, Images} from '../../../../assets';
import {SCREEN_WIDTH, SCREEN_HEIGHT, vw, vh} from '../../../../utils/dimension';
import {useThemeColors} from '../../../../utils/theme';
import {useTranslation} from 'react-i18next';

const Dashboard = () => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation();
  const handleAdd = () => {
    navigation.navigate('TabNavigator');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{t('dashboard.dashboard')}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <Image source={Icons.settings} style={styles.settingsImg} />
        </TouchableOpacity>
      </View>
      <Image source={Images.dashboardImage} style={styles.mainImage} />
      <View style={styles.addContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Image source={Icons.add} style={styles.addImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: '14%',
      alignItems: 'flex-end',
      paddingHorizontal: vw(15),
      paddingBottom: vh(20),
      backgroundColor: '#5698D3',
    },
    headerText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#ffffff',
    },
    settingsImg: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    mainImage: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 1.5,
      resizeMode: 'contain',
    },
    addContainer: {
      alignItems: 'flex-end',
      paddingHorizontal: vw(15),
      paddingTop: Platform.OS === 'android' ? vh(40) : vh(15),
      backgroundColor: theme.backgroundColor,
    },
    addButton: {
      width: vw(60),
      height: vw(60),
      borderRadius: 50,
      backgroundColor: theme.textColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addImg: {
      width: vw(40),
      height: vw(40),
      resizeMode: 'contain',
      tintColor: theme.backgroundColor,
    },
  });
