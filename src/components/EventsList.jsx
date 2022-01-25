import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Share,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const EventsList = ({ events }) => {
  const navigation = useNavigation();

  const eventShare = async () => {
    try {
      const result = await Share.share({
        title: 'ICT event - Find Your Best Work',
        message:
          'I thought you might be interested in this ICT event! \n\n' +
          'Check this out:\n\n' +
          'https://www.eventbrite.com/e/sharing-stories-of-strengths-tickets-201101077737?aff=ebdsoporgprofile',
      });
    } catch (error) {
      console.log('Error => ', error);
    }
  };

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
            <Text style={styles.entryDate}>{entry.cost}</Text>
            <View style={{ padding: 2 }} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('EventDetailPage')}
                activeOpacity={0.8}
              >
                <Text style={styles.entryDetail}>view details</Text>
              </TouchableOpacity>
              <Ionicons
                name="share-outline"
                size={15}
                color="rgba(255, 255, 255, 0.5)"
                onPress={eventShare}
                style={{marginRight: 10}}
              />
            </View>
          </View>
        </View>

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
    width: 115,
    height: 135,
    overflow: 'hidden',
  },
  info: {
    flex: 2,
    paddingLeft: 5,
    paddingBottom: 0,
    marginLeft: 5,
  },
});

export default EventsList;
