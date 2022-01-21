import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import DropMenu from "./DropMenu";

export default function Navbar() {
  const [dropMenu, setDropMenu] = useState(false);

  const handleDropMenu = () => {
    setDropMenu(() => !dropMenu);
  };

  return (
    <>
      <View style={styles.navbar}>
        <Image
          source={require("../../assets/ICT-Logo.png")}
          style={styles.ictLogo}
        />
        {!dropMenu ? (
          <Ionicons
            name="md-menu"
            size={34}
            color="darkgrey"
            style={styles.menu}
            onPress={handleDropMenu}
          />
        ) : (
          <Feather
            name="x"
            size={25}
            color="darkgrey"
            style={styles.menu}
            onPress={handleDropMenu}
          />
        )}
      </View>
      {dropMenu && <DropMenu />}
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 40,
    flexDirection: "row",
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
    marginLeft: 25,
  },
  menu: {
    marginRight: 25,
  },
});
