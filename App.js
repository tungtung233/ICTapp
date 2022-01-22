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
import PhoneCall from './src/components/PhoneCall';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  return fontsLoaded ? (
    <SafeAreaView>
      <Navbar />
      <View style={styles.container}>
        <PhoneCall />
        {/* <MembershipPage /> */}
        {/* <EventDetailPage /> */}
        {/* <EventsPage /> */}
        {/* <Homepage /> */}
        {/* <StatusBar style='auto' /> */}
      </View>
    </SafeAreaView>
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
