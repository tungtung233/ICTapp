import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";

import Button from "./Button";
import Input from "./Input";

const { width } = Dimensions.get("window");
const title = "Sign Up";
const tip =
  "Become a member - you'll enjoy exclusive content, invites, and rewards.";

const SignUp = ({ params }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(() => !isChecked);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.tipText}>{tip}</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.text}>Email *</Text>
      <View style={styles.input}>
        <Input placeholder="example@gmail.com" />
      </View>
      <Text style={styles.text}>Create a password *</Text>
      <View style={styles.input}>
        <Input placeholder="at least 8 characters" password />
      </View>
      <Text style={styles.text}>Date of birth *</Text>
      <View style={styles.input}>
        <Input placeholder="MM / DD / YYYY" />
      </View>
      <View style={styles.input}>
        <Text style={styles.promise}>
          We want to give you a special treat on your birthday
        </Text>
      </View>
      <View style={{ fontSize: 16 }}>
        <CheckBox
          checkedColor="green"
          onPress={handleCheck}
          checked={isChecked}
          containerStyle={{ backgroundColor: "transparent" }}
          title={<Text style={{ fontSize: 16 }}>Subscribe to newsletter</Text>}
        />
      </View>
      <View style={styles.button}>
        <Button text="Become a member" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
  container: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    alignSelf: "stretch",
    width: width - 60,
    margin: 10,
  },
  promise: {
    color: "#808080",
  },
  text: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    fontSize: 16,
  },
  tipText: {
    marginTop: 15,
    color: "black",
    fontFamily: "",
    fontSize: 16,
  },
  titleText: {
    color: "black",
    fontFamily: "",
    fontSize: 22,
  },
});

export default SignUp;
