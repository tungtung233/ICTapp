import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from './src/components/Navbar';
import EventsPage from './src/components/EventsPage';
import Button from './src/components/Button';
import Homepage from './src/components/Homepage';
import EventDetailPage from './src/components/EventDetailsPage';

export default function App() {
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.container}>
        <EventDetailPage />
        <EventsPage />
        <Homepage />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
