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
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'rgba(1, 1, 1, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    fontSize: 18,
    paddingLeft: 15,
    fontFamily: 'Inter_400Regular',
    width: '100%'
  },
});

export default Input;
