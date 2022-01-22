import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from './src/components/Navbar';
import EventsPage from './src/components/EventsPage';
import Homepage from './src/components/Homepage';
import MembershipPage from './src/components/MembershipPage';


export default function App() {
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.container}>
        <MembershipPage />
        {/* <EventsPage /> */}
        {/* <Homepage /> */}
        {/* <StatusBar style='auto' /> */}

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
