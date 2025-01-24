import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Icons } from '../../assets';
import { vh, vw } from '../../utils/dimension';
import { useThemeColors } from '../../utils/theme';
import { BottomTabParamList } from '../../utils/types';
import Dashboard from './screens/dashboard';
import Delivery from './screens/delivery';
import More from './screens/more';
import Orders from './screens/orders';
import Trips from './screens/trips';
import { Colors } from '../../utils/colors';

type TabBarIconProps = {
  focused: boolean;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const DashBoardTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[styles.icon, {tintColor: focused ? Colors.primary : 'grey'}]}
    source={Icons.dashboard}
  />
);

const TripTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[styles.icon, {tintColor: focused ? Colors.primary : 'grey'}]}
    source={Icons.trip}
  />
);

const DeliveryTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[styles.icon, {tintColor: focused ? Colors.primary : 'grey'}]}
    source={Icons.delivery}
  />
);

const OrderTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[styles.icon, {tintColor: focused ? Colors.primary : 'grey'}]}
    source={Icons.order}
  />
);

const MoreTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[styles.moreIcon, {tintColor: focused ? Colors.primary : 'grey'}]}
    source={Icons.more}
  />
);

const BottomNavigation = () => {
  const theme = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          height: vh(80),
          justifyContent: 'center',
          backgroundColor: theme.backgroundColor,
          paddingTop: vh(10),
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <DashBoardTabIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({focused}) => <TripTabIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: DeliveryTabIcon,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: OrderTabIcon,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: MoreTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    width: vw(25),
    height: vw(25),
    resizeMode: 'contain',
  },
  moreIcon: {
    width: vw(26),
    height: vw(26),
    resizeMode: 'contain',
  },
});
