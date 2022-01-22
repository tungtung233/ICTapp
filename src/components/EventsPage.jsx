import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import EventsList from './EventsList';
import { events } from '../../constants/dummy';

const EventsPage = () => (
  <View style={styles.container}>
    <View style={{ padding: 13 }} />
    <View>
      <Text style={styles.titleText}>Workshops &amp; Events</Text>
    </View>
    <View style={{ padding: 30 }} />
    <EventsList events={events} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  titleText: {
    color: 'black',
    fontSize: 25,
  },
});

export default EventsPage;
