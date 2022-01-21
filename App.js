import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SignUp from './src/screen/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Finally!</Text>
      <SignUp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
