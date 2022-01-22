import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import Navbar from './src/components/Navbar';
import EventsPage from './src/components/EventsPage';
import Homepage from './src/components/Homepage';
import MembershipPage from './src/components/MembershipPage';
import EventDetailPage from './src/components/EventDetailsPage';
import SignUp from './src/components/SignUp';
import PhoneCall from './src/components/PhoneCall';
import PhoneSMS from './src/components/PhoneSMS';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  return fontsLoaded ? (
    <NavigationContainer>
      <SafeAreaView>
        <Navbar />
      </SafeAreaView>
      <Stack.Navigator
        initialRouteName='Homepage'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Homepage' component={Homepage} />
        <Stack.Screen name='Workshops' component={EventsPage} />
        <Stack.Screen name='EventDetailPage' component={EventDetailPage} />
        <Stack.Screen name='Community' component={MembershipPage} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
      {/* <View style={styles.container}></View> */}
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
    color: 'black',
  },
});
