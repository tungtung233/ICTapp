import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Input = ({ placeholder, icon, ...resizeTo }) => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder={placeholder}></TextInput>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    color: '#727C8e',
    fontSize: 16,
    paddingLeft: 15,
  },
});

export default Input;
