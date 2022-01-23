import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const Button = ({ text, ...params }) => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#625B71',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 18.5,
  },
});

export default Button;
