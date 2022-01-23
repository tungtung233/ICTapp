import React, { useState } from 'react';
import { View, Image, StatusBar } from 'react-native';
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
import KeepInTouch from './src/components/KeepInTouch';
import PhoneCall from './src/components/PhoneCall';
import PhoneSMS from './src/components/PhoneSMS';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

  const handleDropMenu = () => {
    setShowDropMenu(() => !showDropMenu);
  };

  function BurgerMenu() {
    return (
      <>
        <View>
          {!showDropMenu ? (
            <Ionicons
              name='md-menu'
              size={34}
              color='darkgrey'
              onPress={handleDropMenu}
            />
          ) : (
            <Feather
              name='x'
              size={25}
              color='darkgrey'
              onPress={handleDropMenu}
            />
          )}
        </View>
      </>
    );
  }

  return fontsLoaded ? (
    <NavigationContainer>
      <StatusBar style='auto' />
      {showDropMenu && <DropMenu />}
      <Stack.Navigator
        initialRouteName='Homepage'
        screenOptions={{
          headerLeft: (props) => <LogoTitle {...props} />,
          headerTitleStyle: { color: 'white' },
          headerRight: (props) => <BurgerMenu {...props} />,
        }}
      >
        <Stack.Screen name='Homepage' component={Homepage} />
        <Stack.Screen name='Workshops' component={EventsPage} />
        <Stack.Screen name='EventDetailPage' component={EventDetailPage} />
        <Stack.Screen name='Community' component={MembershipPage} />
        <Stack.Screen name='KeepInTouch' component={KeepInTouch} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
