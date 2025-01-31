import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../../../assets';
import {SCREEN_WIDTH, SCREEN_HEIGHT, vw, vh} from '../../../../utils/dimension';
import {useThemeColors} from '../../../../utils/theme';
import {useTranslation} from 'react-i18next';
import {size} from '../../../../utils/size';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../../../utils/types';
import {Colors} from '../../../../utils/colors';
import {ScreenNames} from '../../../../utils/screenNames';
import Header from '../../../../components/customHeader';

interface dashboardProps {
  navigation: BottomTabNavigationProp<BottomTabParamList>;
}

const Dashboard = ({navigation}: dashboardProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const handleAdd = () => {
    navigation.navigate('TabNavigator');
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        title={t('dashboard.dashboard')}
         headerStyle={styles.header}
        headerTextStyle={styles.headerText}
        icon={Icons.settings}
        onPress={() => navigation.navigate(ScreenNames.Settings)} // This will be resolved in future.
        showRightIcon={true}
      />
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

type Theme = {
  backgroundColor: string;
  textColor: string;
};

const Styles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    header:{
      height:'13.5%',
      width:'100%',
      flexDirection: 'row',
      alignItems:'flex-end',
      justifyContent:'space-between',
      paddingHorizontal: vw(15),
      paddingBottom: vh(20),
      backgroundColor: Colors.primary,
    },
    headerText: {
      fontSize: size.headerTitle,
      fontWeight: '600',
      color: Colors.White,
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
