import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function ContactUs() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.header}>Contact Us</Text>
          <Text style={styles.text}>+1 617-468-7837</Text>
          <Text style={styles.text}>staff@ictransitions.org</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.header}>Follow Us</Text>
          <View style={styles.socialMedia}>
            <Entypo
              name='twitter-with-circle'
              size={24}
              color='white'
              style={{ marginHorizontal: 5 }}
            />
            <Entypo
              name='linkedin-with-circle'
              size={24}
              color='white'
              style={{ marginHorizontal: 5 }}
            />
            <Entypo
              name='facebook-with-circle'
              size={24}
              color='white'
              style={{ marginHorizontal: 5 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesome name='copyright' size={12} color='white' />
        <Text style={styles.text}> 2022 ICT | Terms | Privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 173,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#222D4D',
    marginTop: 30,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  bottomContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  leftColumn: {
    width: '50%',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter_400Regular',
    lineHeight: 22,
    fontSize: 14,
  },
  header: {
    color: 'white',
    fontFamily: 'Inter_500Medium',
    marginBottom: 10,
    fontSize: 16,
  },
  rightColumn: {
    width: '50%',
    marginLeft: 20,
    alignItems: 'center',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
