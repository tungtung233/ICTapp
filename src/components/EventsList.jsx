import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const EventsList = ({ events }) => {
  const navigation = useNavigation();

  return events ? (
    events.map((entry, index) => (
      <View key={index}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EventDetailPage')}
          activeOpacity={0.8}
        >
          <View style={styles.card}>
            <ImageBackground source={entry.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.entryTitle}>{entry.title}</Text>
              <View style={{ padding: 1 }} />
              <Text style={styles.entryDate}>{entry.date}</Text>
              <Text style={styles.entryDate}>{entry.time}</Text>
              <Text style={styles.entryDate}>{entry.cost}</Text>
              <View style={{ padding: 2 }} />
              <Text style={styles.entryDetail}>view details</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ padding: 5 }} />
      </View>
    ))
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#625B71',
    borderRadius: 14,
    flexDirection: 'row',
    height: 135,
    alignItems: 'center',
  },
  entryTitle: {
    fontSize: 18,
    textDecorationLine: 'underline',
    lineHeight: 24,
    letterSpacing: 0.1,
    fontStyle: 'normal',
    fontFamily: 'Inter_500Medium',
    color: 'white',
  },
  entryDate: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontStyle: 'normal',
    fontFamily: 'Inter_500Medium',
    color: 'white',
  },
  entryDetail: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontStyle: 'normal',
    fontFamily: 'Inter_500Medium',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  image: {
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    width: 120,
    height: 135,
    overflow: 'hidden',
  },
  info: {
    flex: 2,
    paddingLeft: 8,
    paddingBottom: 0,
    marginLeft: 5,
  },
});

export default EventsList;
