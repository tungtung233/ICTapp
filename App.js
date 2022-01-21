import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Navbar from "./src/components/Navbar";
import DropMenu from "./src/components/DropMenu";

export default function App() {
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    paddingTop: 50,
  },
});
