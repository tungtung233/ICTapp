import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function HeaderBar() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.navbar}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Homepage')}
        >
          <Image
            source={require('../../assets/ICT-Logo.png')}
            style={styles.ictLogo}
          />
        </TouchableWithoutFeedback>
        {useDrawerStatus() === 'open' ? (
          <Feather
            name='x'
            size={25}
            color='#8c929c'
            style={{ marginRight: 30 }}
            onPress={() => navigation.closeDrawer()}
          />
        ) : (
          <Ionicons
            name='md-menu'
            size={34}
            color='#8c929c'
            style={{ marginRight: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
  },
  ictLogo: {
    width: 50,
    height: 30,
    marginLeft: 15,
  },
});
