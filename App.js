import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import EventsPage from './src/screens/EventsPage';
import Homepage from './src/screens/Homepage';
import MembershipPage from './src/screens/MembershipPage';
import EventDetailPage from './src/screens/EventDetailsPage';
import StayInTouch from './src/screens/StayInTouch';
import StayInTouchConfirmationPage from './src/screens/StayInTouchConfirmationPage';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App() {
  StatusBar.setBarStyle('light-content', true);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const CustomDrawerContent = ({ navigation }) => {
    return (
      <>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('Homepage')}
        />
        <DrawerItem label="About" />
        <DrawerItem
          label="Membership"
          onPress={() => navigation.navigate('Membership')}
        />
        <DrawerItem
          label="Contact Us"
          onPress={() => navigation.navigate('StayInTouch')}
        />
        <DrawerItem
          label="Workshops"
          onPress={() => navigation.navigate('Workshops')}
        />
        <DrawerItem label="Courses" />
        <DrawerItem label="Resources" />
        <DrawerItem
          label="Close drawer"
          onPress={() => navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => navigation.toggleDrawer()}
        />
      </>
    );
  };

  return fontsLoaded ? (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Homepage"
          component={Homepage}
          options={{
            drawerActiveBackgroundColor: 'red',
          }}
        />
        <Drawer.Screen name="Workshops" component={EventsPage} />
        <Drawer.Screen name="EventDetailPage" component={EventDetailPage} />
        <Drawer.Screen name="Membership" component={MembershipPage} />
        <Drawer.Screen name="StayInTouch" component={StayInTouch} />
        <Drawer.Screen
          name="StayInTouchConfirmationPage"
          component={StayInTouchConfirmationPage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
