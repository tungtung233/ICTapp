import * as React from "react";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Navbar() {
  return (
    <Header
      centerComponent={{
        text: "MY TITLE",
        style: { color: "#fff" },
      }}
      placement="center"
    />
  );
}
