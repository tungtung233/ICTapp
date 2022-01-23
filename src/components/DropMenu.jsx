import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

export default function DropMenu() {
  const navigation = useNavigation();

  return (
    <View style={styles.dropMenu}>
      <Text style={styles.menuItem}>About</Text>
      <Divider width={1} style={styles.divider} />
      <Text
        style={styles.menuItem}
        onPress={() => navigation.navigate('Membership')}
      >
        Membership
      </Text>
      <Divider width={1} style={styles.divider} />
      <Text
        style={styles.menuItem}
        onPress={() => navigation.navigate('SignUp')}
      >
        Contact Us
      </Text>
      <Divider width={1} style={styles.divider} />
      <Text
        style={styles.menuItem}
        onPress={() => navigation.navigate('Workshops')}
      >
        Workshops
      </Text>
      <Divider width={1} style={styles.divider} />
      <Text style={styles.menuItem}>Courses</Text>
      <Divider width={1} style={styles.divider} />
      <Text style={styles.menuItem}>Resources</Text>
      <View style={styles.menuHome}>
        <Ionicons
          name='home'
          size={24}
          color='black'
          style={styles.divider}
          onPress={() => navigation.navigate('Homepage')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropMenu: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 106,
    left: 0,
    elevation: 25,
    shadowColor: '#fff',
    width: '100%',
  },
  divider: {
    marginLeft: 25,
    marginRight: 25,
  },
  menuItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 15,
  },
  menuHome: {
    backgroundColor: 'grey',
    height: 40,
    justifyContent: 'center',
  },
});
