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
            <View style={{ padding: 1 }} />
            <Text style={styles.entryDate}>{entry.date}</Text>
            <Text style={styles.entryDate}>{entry.time}</Text>
            <View style={{ padding: 2 }} />
            <Text style={styles.entryDetail}>view details</Text>
          </View>
        </View>
        <View style={{ padding: 10 }} />
      </View>
    ))
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    height: 100,
  },
  entryTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.1,
    fontStyle: 'normal',
    fontFamily: 'Inter_500Medium',
  },
  entryDate: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.1,
    fontStyle: 'normal',
    fontFamily: 'Inter_500Medium',
  },
  entryDetail: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
    fontStyle: 'normal',
    fontFamily: 'Inter_500Medium',
  },
  image: {
    borderWidth: 0,
    borderRadius: 14,
    width: 102.5,
    height: 100,
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
