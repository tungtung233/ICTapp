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

import EventsPage from './src/components/EventsPage';
import Homepage from './src/components/Homepage';
import MembershipPage from './src/components/MembershipPage';
import EventDetailPage from './src/components/EventDetailsPage';
import StayInTouch from './src/components/StayInTouch';
import StayInTouchConfirmationPage from './src/components/StayInTouchConfirmationPage';
import PhoneCall from './src/components/PhoneCall';
import PhoneSMS from './src/components/PhoneSMS';

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

  const CustomDrawerContent = (props) => {
    return (
      <>
        <DrawerItem
          label='Home'
          onPress={() => props.navigation.navigate('Homepage')}
        />
        <DrawerItem label='About' />
        <DrawerItem
          label='Membership'
          onPress={() => props.navigation.navigate('Membership')}
        />
        <DrawerItem
          label='Contact Us'
          onPress={() => props.navigation.navigate('StayInTouch')}
        />
        <DrawerItem
          label='Workshops'
          onPress={() => props.navigation.navigate('Workshops')}
        />
        <DrawerItem label='Courses' />
        <DrawerItem label='Resources' />
        <DrawerItem
          label='Close drawer'
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label='Toggle drawer'
          onPress={() => props.navigation.toggleDrawer()}
        />
      </>
    );
  };

  return fontsLoaded ? (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Drawer.Navigator
        initialRouteName='Homepage'
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name='Homepage'
          component={Homepage}
          options={{
            drawerActiveBackgroundColor: 'red',
          }}
        />
        <Drawer.Screen name='Workshops' component={EventsPage} />
        <Drawer.Screen name='EventDetailPage' component={EventDetailPage} />
        <Drawer.Screen name='Membership' component={MembershipPage} />
        <Drawer.Screen name='StayInTouch' component={StayInTouch} />
        <Drawer.Screen
          name='StayInTouchConfirmationPage'
          component={StayInTouchConfirmationPage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
