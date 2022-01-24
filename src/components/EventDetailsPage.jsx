import React from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Octicons } from '@expo/vector-icons';

import HeaderBar from './HeaderBar';
import ContactUs from './ContactUs';

function handleOpenEventbrite() {
  Linking.openURL(
    'https://www.eventbrite.com/e/how-to-use-your-strengths-to-find-your-best-work-tickets-199412547297'
  );
}

function EventDetailPage() {
  return (
    <>
      <HeaderBar />
      <ScrollView style={{ backgroundColor: '#F6F6F6' }}>
        <View style={styles.container}>
          <View style={{ padding: 12 }} />
          <ImageBackground
            style={styles.image}
            source={require('../../assets/EventDetails-Page/event_banner.jpg')}
          />
          <View style={{ padding: 10 }} />
          <View style={styles.container}>
            <Text style={styles.titleText}>Find Your Best Work</Text>
            <View style={styles.twoColumnContainer}>
              <View>
                <Text style={styles.date}>WED, JAN 19</Text>
                <Text style={styles.date}>1:00 PM - 2:00 PM EST</Text>
                <Text style={styles.price}>$10 / Free for members</Text>
              </View>
              <Button
                buttonStyle={{
                  height: 50,
                  width: 140,
                  borderRadius: 18,
                  backgroundColor: '#625B71',
                }}
                title='register now'
                titleStyle={{ fontSize: 15, fontFamily: 'Inter_500Medium' }}
                onPress={handleOpenEventbrite}
              ></Button>
            </View>
            <Text style={styles.subheading}>
              When you really understand who you are, you are going to be better
              at what you do.
            </Text>
            <Text style={styles.description}>
              Compared with those who do not get to focus on what they do best,
              people who have the opportunity to use their strengths are 6 times
              as likely to be engaged in their jobs and more than 3 times as
              likely to report having an excellent quality of life.
            </Text>
            <Text style={styles.description}>
              In this highly interactive session, you will learn techniques to
              identify and embrace your strengths and put them to work for a
              more engaged life.
            </Text>
            <Text style={styles.description}>You will discover:</Text>
            <View>
              <ListItem
                containerStyle={{
                  backgroundColor: '#F6F6F6',
                  margin: 0,
                  padding: 0,
                }}
              >
                <Octicons
                  name='primitive-dot'
                  size={14}
                  color='#1B2540'
                  style={{ paddingBottom: 75 }}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.description}>
                    The 5 clues of talent that could help you build a language
                    around your ideal work and guide your network
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: '#F6F6F6',
                  margin: 0,
                  padding: 0,
                }}
              >
                <Octicons
                  name='primitive-dot'
                  size={14}
                  color='#1B2540'
                  style={{ paddingBottom: 45 }}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.description}>
                    The difference between a talent and a strength
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: '#F6F6F6',
                  margin: 0,
                  padding: 0,
                }}
              >
                <Octicons
                  name='primitive-dot'
                  size={14}
                  color='#1B2540'
                  style={{ paddingBottom: 45 }}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.description}>
                    Why your weaknesses may not matter as much as you think
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: '#F6F6F6',
                  margin: 0,
                  padding: 0,
                }}
              >
                <Octicons
                  name='primitive-dot'
                  size={14}
                  color='#1B2540'
                  style={{ paddingBottom: 105 }}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.description}>
                    Low-cost tools that can help you build a language around
                    what makes you unique and give you ideas for action
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
            <Text style={styles.description}>
              Join us in learning more about identifying and talking about your
              talents and strengths to attract your best work.
            </Text>

            <Button
              buttonStyle={{
                height: 60,
                width: 160,
                borderRadius: 18,
                backgroundColor: '#625B71',
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 30,
              }}
              containerStyle={{ margin: 5 }}
              title='register now'
              titleStyle={{ fontSize: 17, fontFamily: 'Inter_500Medium' }}
              onPress={handleOpenEventbrite}
            />
            <View style={styles.authorTwoColumnContainer}>
              <Image
                style={styles.avatar}
                source={require('../../assets/EventDetails-Page/event_author.jpg')}
              />
              <View style={{ height: 169, justifyContent: 'center' }}>
                <Text style={styles.authorName}>{`Anne Marie \nMessier`}</Text>
                <Text style={styles.authorTitle}>
                  {`Certified Gallup \nStrengths Coach and \nFounder of Straightline \nManagement Solutions`}
                </Text>
              </View>
            </View>
            <View style={{ padding: 16 }} />
            <Text style={styles.aboutAuthor}>
              Ann Marie has helped teams and entrepreneurs in the face of a
              changing landscape, helping them identify roadblocks to their
              success and directing their focus to new ways of thinking to
              create a `career best` experience for all involved. Her unique
              insights have been gathered and synthesized from her work spanning
              the corporate boardrooms to the local coffee shops.
            </Text>
            <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
              <Text style={styles.authorContact}>
                amessier@straightlinegroup.com
              </Text>
              <Text style={styles.authorContact}>978-821-8376</Text>
              <Text style={styles.authorContact}>
                www.straightlinegroup.com
              </Text>
            </View>
          </View>
        </View>
        <ContactUs />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 200,
    width: 150,
    borderRadius: 18,
  },
  aboutAuthor: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 20,
  },
  authorName: {
    fontFamily: 'Inter_400Regular',
    fontSize: 30,
    lineHeight: 40,
    marginBottom: 10,
    color: '#1B2540',
  },
  authorTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 22.5,
    color: '#846352',
  },
  authorContact: {
    fontFamily: 'Inter_400Regular',
    fontSize: 17,
    lineHeight: 25,
    color: '#846352',
  },
  authorTwoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
  },
  container: {
    marginLeft: 11,
    marginRight: 11,
    backgroundColor: '#F6F6F6',
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 20,
    textTransform: 'uppercase',
    color: '#846352',
    marginRight: 25,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 20,
    color: '#1B2540',
  },
  image: {
    marginTop: 6,
    height: 315,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#988FAD',
  },
  price: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: '#846352',
  },
  subheading: {
    color: '#1B2540',
    fontFamily: 'Inter_400Regular',
    fontSize: 27,
    lineHeight: 35,
    marginTop: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  titleText: {
    fontFamily: 'Inter_400Regular',
    color: '#1B2540',
    fontSize: 42,
    lineHeight: 50,
  },
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 21,
  },
});

export default EventDetailPage;
