import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import { events } from '../../constants/dummy';
import EventsList from './EventsList';

const EventsPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ padding: 15 }} />
        <View>
          <Text style={styles.titleText}>Workshops &amp; Events</Text>
        </View>
        <View style={{ padding: 30 }} />
        <EventsList events={events} />
      </View>
      <View style={{ padding: 300 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'normal',
    fontFamily: 'Inter_400Regular',
  },
});

export default EventsPage;
