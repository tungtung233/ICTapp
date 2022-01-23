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
import { Button } from 'react-native-elements';

function handleOpenEventbrite() {
  Linking.openURL(
    'https://www.eventbrite.com/o/institute-for-career-transitions-16486809428'
  );
}

function EventDetailPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ padding: 12 }} />
        <ImageBackground
          style={styles.image}
          source={require('../../assets/EventDetails-Page/event_banner.jpg')}
        />
        <View style={{ padding: 23 }} />
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
                height: 47,
                width: 129,
                borderRadius: 14,
                backgroundColor: '#625B71',
              }}
              containerStyle={{ margin: 5 }}
              title="register now"
              titleStyle={{ fontSize: 14 }}
              onPress={handleOpenEventbrite}
            ></Button>
          </View>
          <Text style={styles.subtitle}>
            How to use your strengths to find your best work.
          </Text>
          <Text style={styles.description}>
            When you really understand who you are, you are going to be better
            at what you do.{' '}
          </Text>
          <Text style={styles.description}>
            Compared with those who do not get to focus on what they do best,
            people who have the opportunity to use their strengths are 6 times
            as likely to be engaged in their jobs and more than 3 times as
            likely to report having an excellent quality of life.
          </Text>
          <Text style={styles.description}>
            {' '}
            In this highly interactive session, you will learn techniques to
            identify and embrace your strengths and put them to work for a more
            engaged life.
          </Text>
          <Text style={styles.description}>You will discover:</Text>
          <View style={styles.container}>
            <Text style={styles.description}>
              {''}• The 5 clues of talent that could help you build a language
              around your ideal work and guide your network to keep you on `top
              of mind1` for opportunities that align with your greatness
            </Text>
            <Text style={styles.description}>
              {' '}
              • The difference between a talent and a strength
            </Text>
            <Text style={styles.description}>
              {' '}
              • Why your weaknesses may not matter as much as you think
            </Text>
            <Text style={styles.description}>
              {' '}
              • Low-cost tools that can help you build a language around what
              makes you unique and give you ideas for action
            </Text>
          </View>
          <Text style={styles.description}>
            {' '}
            Join us in learning more about identifying and talking about your
            talents and strengths to attract your best work.
          </Text>

          <Button
            buttonStyle={{
              height: 47,
              width: 129,
              borderRadius: 14,
              backgroundColor: '#625B71',
              alignSelf: 'center',
            }}
            containerStyle={{ margin: 5 }}
            title="register now"
            titleStyle={{ fontSize: 14 }}
            onPress={handleOpenEventbrite}
          />
          <View style={{ padding: 40 }} />
          <View style={styles.twoColumnContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/EventDetails-Page/event_author.jpg')}
            />
            <View style={{ height: 169 }}>
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
            success and directing their focus to new ways of thinking to create
            a `career best` experience for all involved. Her unique insights
            have been gathered and synthesized from her work spanning the
            corporate boardrooms to the local coffee shops.
          </Text>
          <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
            <Text style={styles.authorContact}>
              amessier@straightlinegroup.com
            </Text>
            <Text style={styles.authorContact}>978-821-8376</Text>
            <Text style={styles.authorContact}>www.straightlinegroup.com</Text>
          </View>
          <Text>{`\n\n\n`}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 170,
    width: 112,
    borderRadius: 14,
    backgroundColor: '#988FAD',
    marginRight: 25,
    resizeMode: 'contain',
  },
  aboutAuthor: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 20,
  },
  authorName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 20,
  },
  authorTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 24,
    color: '#846352',
  },
  authorContact: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#846352',
  },
  container: {
    marginLeft: 11,
    marginRight: 11,
    backgroundColor: '#F6F6F6',
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: '#846352',
    marginRight: 25,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 20,
  },
  image: {
    height: 264,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#988FAD',
  },
  price: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#846352',
  },
  subtitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  titleText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 28,
  },
  twoColumnContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 21,
    marginBottom: 21,
  },
});

export default EventDetailPage;
