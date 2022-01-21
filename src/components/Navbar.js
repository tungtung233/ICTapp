import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "grey",
    justifyContent: "space-between",
    elevation: 20,
    shadowColor: "#52006A",
    backgroundColor: "white",
  },
  ictLogo: {
    width: 43,
    height: 30,
    marginLeft: 15,
  },
  menu: {
    marginRight: 15,
  },
});

export default function Navbar() {
  const [dropMenu, setDropMenu] = useState(false);

  const handleDropMenu = () => {
    setDropMenu(() => !dropMenu);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/ICT-Logo.png")}
        style={styles.ictLogo}
      />
      <Ionicons
        name="md-menu"
        size={34}
        color="darkgrey"
        style={styles.menu}
        onPress={handleDropMenu}
      />
    </View>
  );
}
