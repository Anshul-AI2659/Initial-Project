import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import { vh, vw } from '../../utils/dimension';
import { size } from '../../utils/size';
import { useThemeColors } from '../../utils/theme';
import { TopTabParamList } from '../../utils/types';
import GeneralDetails from './screens/generalDetails';
import OtherDetails from './screens/otherDetails';
import PickUpDetails from './screens/pickUpDetails';
import Shipment1Details from './screens/shipment1Details';
import { Colors } from '../../utils/colors';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();
const TabNavigator = () => {
  const theme = useThemeColors();
  const navigation = useNavigation();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image source={Icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Shipment1</Text>
      </View>
      <TopTab.Navigator
        initialRouteName="GeneralDetails"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: {
            // height: '8%',
            backgroundColor: theme.backgroundColor,
            justifyContent: 'center',
          },
          tabBarBounces: false,
          swipeEnabled: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: theme.textColor,
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
        }}
        screenListeners={{
          state: e => {
            setCurrentTabIndex(e.data.state.index);
          },
        }}>
        <TopTab.Screen
          name="GeneralDetails"
          component={GeneralDetails}
          listeners={() => ({
            tabPress: e => {
              if (currentTabIndex < 0) {
                e.preventDefault();
              }
            },
          })}
        />
        <TopTab.Screen
          name="Shipment1Details"
          component={Shipment1Details}
          listeners={() => ({
            tabPress: e => {
              if (currentTabIndex < 1) {
                e.preventDefault();
              }
            },
          })}
        />
        <TopTab.Screen
          name="PickUpDetails"
          component={PickUpDetails}
          listeners={() => ({
            tabPress: e => {
              if (currentTabIndex < 2) {
                e.preventDefault();
              }
            },
          })}
        />
        <TopTab.Screen
          name="OtherDetails"
          component={OtherDetails}
          listeners={() => ({
            tabPress: e => {
              if (currentTabIndex < 3) {
                e.preventDefault();
              }
            },
          })}
        />
      </TopTab.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    paddingTop: vh(55),
    paddingBottom: vh(20),
    flexDirection: 'row',
    paddingHorizontal: vw(20),
    backgroundColor: Colors.primary,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: Colors.White,
  },
  headerText: {
    fontSize: size.headerTitle,
    fontWeight: '600',
    color: Colors.White,
    marginLeft: vw(20),
  },
});
