import React from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  EventsPage,
  EventDetailPage,
  Homepage,
  MembershipPage,
  StayInTouch,
  StayInTouchConfirmationPage,
} from './src/screens';
import ContactUs from './src/components/ContactUs.jsx';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');

export default function App() {
  StatusBar.setBarStyle('light-content', true);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const CustomDrawerContent = ({ navigation }) => {
    return (
      <>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View style={styles.header}>
              <Ionicons
                name='close-outline'
                size={24}
                color='#FFFFFF'
                onPress={() => navigation.navigate('Homepage')}
              />
            </View>
            <DrawerItem label='About' />
            <View style={styles.divider} />
            <DrawerItem
              label='Membership'
              onPress={() => navigation.navigate('Membership')}
            />
            <View style={styles.divider} />
            <DrawerItem
              label='Contact Us'
              onPress={() => navigation.navigate('StayInTouch')}
            />
            <View style={styles.divider} />
            <DrawerItem
              label='Workshops'
              onPress={() => navigation.navigate('Workshops')}
            />
            <View style={styles.divider} />
            <DrawerItem label='Courses' />
            <View style={styles.divider} />
            <DrawerItem label='Resources' />
            <View style={styles.divider} />
          </View>
          <View>
            <ContactUs />
          </View>
        </View>
      </>
    );
  };

  return fontsLoaded ? (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Drawer.Navigator
        initialRouteName='Homepage'
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#F6F6F6',
            width: width * 0.831,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name='Homepage' component={Homepage} />
        <Drawer.Screen name='Workshops' component={EventsPage} />
        <Drawer.Screen name='EventDetailPage' component={EventDetailPage} />
        <Drawer.Screen name='Membership' component={MembershipPage} />
        <Drawer.Screen name='StayInTouch' component={StayInTouch} />
        <Drawer.Screen
          name='StayInTouchConfirmationPage'
          component={StayInTouchConfirmationPage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#222D4D',
    borderBottomWidth: 0.9,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#222D4D',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
});
