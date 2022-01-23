import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import DropMenu from './src/components/DropMenu';
import EventsPage from './src/components/EventsPage';
import Homepage from './src/components/Homepage';
import MembershipPage from './src/components/MembershipPage';
import EventDetailPage from './src/components/EventDetailsPage';
import StayInTouch from './src/components/StayInTouch';
import StayInTouchConfirmationPage from './src/components/StayInTouchConfirmationPage';
import PhoneCall from './src/components/PhoneCall';
import PhoneSMS from './src/components/PhoneSMS';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App() {
  StatusBar.setBarStyle('light-content', true);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  function LogoTitle() {
    return (
      <Image
        style={{ width: 43, height: 30 }}
        source={require('./assets/ICT-Logo.png')}
      />
    );
  }

  const [showDropMenu, setShowDropMenu] = useState(false);

  const openDropMenu = () => {
    setShowDropMenu(true);
  };

  const closeDropMenu = () => {
    setShowDropMenu(true);
  };

  function BurgerMenu(props) {
    return (
      <>
        <View>
          {!showDropMenu ? (
            <Ionicons
              name='md-menu'
              size={34}
              color='darkgrey'
              onPress={openDropMenu}
            />
          ) : (
            <Feather
              name='x'
              size={25}
              color='darkgrey'
              onPress={closeDropMenu}
            />
          )}
        </View>
      </>
    );
  }

  const CustomDrawerContent = (props) => {
    return (
      <>
        <DrawerItem
          label='Home'
          onPress={() => props.navigation.navigate('Homepage')}
        />
        <DrawerItem
          label='About'
        />
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
      {/* {showDropMenu && <DropMenu />} */}
      <Drawer.Navigator
        initialRouteName='Homepage'
        // screenOptions={{
        //   headerShadowVisible: false,
        //   headerStyle: { backgroundColor: '#F6F6F6' },
        //   headerLeft: (props) => <LogoTitle {...props} />,
        //   headerTitleStyle: { color: '#F6F6F6' },
        //   headerRight: (props) => <BurgerMenu {...props} />,
        // }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name='Homepage' component={Homepage} />
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
