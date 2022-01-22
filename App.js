import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from './src/components/Navbar';
// import SignUp from './src/components/SignUp';
import EventsList from './src/components/EventsList';

export default function App() {
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.container}>
        {/* <SignUp /> */}
        <EventsList />
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
