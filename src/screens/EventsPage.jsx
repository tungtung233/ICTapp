import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import { events } from '../../constants/dummy';
import EventsList from '../components/EventsList';
import HeaderBar from '../components/HeaderBar';
import ContactUs from '../components/ContactUs';

const EventsPage = () => {
  return (
    <>
      <HeaderBar />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleText}>Workshops &amp; Events</Text>
          </View>
          <View style={{ padding: 5 }} />
          <EventsList events={events} />
        </View>
        <ContactUs />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#F6F6F6',
  },
  titleText: {
    color: '#A9A2A2',
    fontSize: 42,
    lineHeight: 50,
    fontWeight: 'normal',
    fontFamily: 'Inter_400Regular',
  },
});

export default EventsPage;
