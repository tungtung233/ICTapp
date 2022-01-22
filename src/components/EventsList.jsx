import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const EventsList = ({ events }) => {
  return events ? (
    events.map((entry, index) => (
      <View key={index}>
        <View style={styles.card}>
          <ImageBackground source={entry.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.entryTitle}>{entry.title}</Text>
            <View style={{ padding: 3 }} />
            <Text style={styles.entryDate}>{entry.date}</Text>
            <Text style={styles.entryDate}>{entry.time}</Text>
            <View style={{ padding: 4 }} />
            <Text>view details</Text>
          </View>
        </View>
        <View style={{ padding: 11 }} />
      </View>
    ))
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
  },
  entryTitle: {
    fontSize: 18,
  },
  entryDate: {
    fontSize: 16,
  },
  image: {
    borderWidth: 2,
    borderWidth: 0,
    borderRadius: 20,
    width: width * 0.27,
    height: width * 0.27,
    overflow: 'hidden',
  },
  info: {
    flex: 2,
    padding: 8,
    paddingBottom: 0,
    marginLeft: 5,
  },
});

export default EventsList;
