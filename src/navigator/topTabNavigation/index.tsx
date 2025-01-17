import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Shipment1Details from './screens/shipment1Details';
import PickUpDetails from './screens/pickUpDetails';
import GeneralDetails from './screens/generalDetails';
import {vw, vh} from '../../utils/dimension';
import {Icons} from '../../assets';

import {useNavigation} from '@react-navigation/native';
import { useThemeColors } from '../../utils/theme';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const theme = useThemeColors();
  const navigation = useNavigation();

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
      <Tab.Navigator
        initialRouteName="GeneralDetails"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: {
            height: '8%',
            backgroundColor: theme.backgroundColor,
            justifyContent: 'center',
          },
          swipeEnabled: false,
          tabBarActiveTintColor: '#5698D3',
          tabBarInactiveTintColor: theme.textColor,
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
        }}>
        <Tab.Screen name="GeneralDetails" component={GeneralDetails} />
        <Tab.Screen name="Shipment1Details" component={Shipment1Details}  />
        <Tab.Screen name="PickUpDetails" component={PickUpDetails} />
      </Tab.Navigator>
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
    backgroundColor: '#5698D3',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: '#ffffff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: vw(20),
  },
});
