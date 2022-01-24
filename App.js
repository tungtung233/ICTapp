import React from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { Dimensions, StatusBar } from 'react-native';
import {
  EventsPage,
  EventDetailPage,
  Homepage,
  MembershipPage,
  StayInTouch,
  StayInTouchConfirmationPage,
} from './src/screens';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

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
        screenOptions={{ drawerPosition: 'right', headerShown: false }}
        drawerStyle={{
          width: Dimensions.get('window').width * 0.95,
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
