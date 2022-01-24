import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import MembershipTestimonials from '../components/MembershipTestimonials';
import HeaderBar from '../components/HeaderBar';
import ContactUs from '../components/ContactUs';

import { Octicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MembershipPage() {
  const navigation = useNavigation();

  return (
    <>
      <HeaderBar />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require('../../assets/Membership-Page/Membership.jpg')}
            style={styles.membershipImage}
          >
            <Text style={styles.membershipImageTitle}>Membership</Text>
          </ImageBackground>
        </View>
        <View style={styles.membershipIntro}>
          <Text style={styles.membershipIntroTitle}>Online.</Text>
          <Text style={styles.membershipIntroTitle}>
            Support when you need it.
          </Text>
          <Text style={styles.membershipIntroSubheading}>
            Designed to provide the support you need right now.
          </Text>
          <Text style={styles.membershipIntroDesc}>
            A job search is a marathon, not a sprint. It's hard work and often
            lonely. Our community provides a supportive, safe and empowering
            fellowship.
          </Text>
        </View>
        <View style={styles.orientation}>
          <Text style={styles.orientationSubheading}>
            Next member orientation:
          </Text>
          <Text style={styles.orientationDate}>
            {`Monday, October 18 \n2 P.M EDT as part of the WIN series`}
          </Text>
        </View>
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Button
            buttonStyle={{
              width: 230,
              height: 55,
              borderRadius: 15,
              backgroundColor: '#625B71',
            }}
            onPress={() => navigation.navigate('StayInTouch')}
            title="Find out more"
            titleStyle={{ fontFamily: 'Inter_500Medium', fontSize: 17 }}
          ></Button>
        </View>
        <View style={styles.benefits}>
          <Text style={styles.benefitsHeading}>Member benefits include:</Text>
          <ListItem containerStyle={{ backgroundColor: '#F6F6F6' }}>
            <Octicons
              name="primitive-dot"
              size={14}
              color="black"
              style={{ paddingBottom: 25 }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.benefitsList}>
                Discounts on public events and exclusive member only offerings
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem containerStyle={{ backgroundColor: '#F6F6F6' }}>
            <Octicons
              name="primitive-dot"
              size={14}
              color="black"
              style={{ paddingBottom: 88 }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.benefitsList}>
                The WIN series offers members the chance to network and support
                other members through our Slack channel
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/Membership-Page/Membership-Benefits.jpg')}
            style={styles.benefitsImage}
          />
        </View>
        <View style={styles.collaboratory}>
          <Text style={styles.collabTitle}>The Collaboratory</Text>
          <Text style={styles.collabParagraph}>
            Once you are a member, you can enroll in the Collaboratory - our 12
            week flagship program broken up into 3 sprints:
          </Text>
          <Text
            style={styles.collabList}
          >{`Sprint 1: Foundations\nSprint 2: Alignment\nSprint 3: Building your Team`}</Text>
          <Text style={styles.collabParagraph}>
            A new cohort starts every three months. Click here to find out more
            information about the course syllabus and fees, and to register for
            an information session.
          </Text>
        </View>
        <View style={{ marginTop: 70, alignItems: 'center' }}>
          <Button
            buttonStyle={{
              width: 230,
              height: 55,
              borderRadius: 15,
              backgroundColor: '#625B71',
            }}
            onPress={() => navigation.navigate('StayInTouch')}
            title="Find out more"
            titleStyle={{ fontFamily: 'Inter_500Medium', fontSize: 17 }}
          ></Button>
        </View>
        <View style={styles.testimonials}>
          <Text style={styles.testimonialHeading}>What people are saying:</Text>
          <MembershipTestimonials />
        </View>
        <ContactUs />
        <View style={{ padding: 20, backgroundColor: '#222D4D' }}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
  },
  header: {
    alignItems: 'center',
  },
  membershipImage: {
    marginTop: 32,
    marginBottom: 20,
    justifyContent: 'flex-end',
    height: 195,
    width: width - 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  membershipImageTitle: {
    fontSize: 52,
    lineHeight: 52,
    color: 'white',
    marginBottom: 20,
    marginLeft: 10,
    fontFamily: 'Inter_400Regular',
  },
  membershipIntro: {
    paddingHorizontal: 20,
  },
  membershipIntroTitle: {
    fontSize: 52,
    lineHeight: 56,
    paddingVertical: -5,
    fontFamily: 'Inter_400Regular',
    color: '#1B2540',
  },
  membershipIntroSubheading: {
    fontSize: 22,
    fontFamily: 'Inter_500Medium',
    lineHeight: 30,
    color: '#1B2540',
    fontWeight: '500',
    marginTop: 25,
  },
  membershipIntroDesc: {
    fontSize: 18,
    paddingTop: 20,
    lineHeight: 28,
    fontFamily: 'Inter_400Regular',
  },
  orientation: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  orientationSubheading: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    lineHeight: 20,
    color: '#1B2540',
  },
  orientationDate: {
    fontSize: 28,
    fontFamily: 'Inter_400Regular',
    lineHeight: 39,
    color: '#846352',
    marginTop: 5,
  },
  benefits: {
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  benefitsHeading: {
    fontSize: 32,
    fontFamily: 'Inter_500Medium',
    lineHeight: 45,
    color: '#1B2540',
  },
  benefitsList: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    lineHeight: 30,
    color: '#1B2540',
  },
  benefitsImage: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'flex-end',
    height: 225,
    width: width - 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  collaboratory: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  collabTitle: {
    fontSize: 38,
    fontFamily: 'Inter_400Regular',
    color: '#1B2540',
  },
  collabParagraph: {
    lineHeight: 27,
    fontSize: 19,
    fontFamily: 'Inter_400Regular',
    color: '#1B2540',
    marginTop: 30,
  },
  collabList: {
    lineHeight: 30,
    fontSize: 25,
    fontFamily: 'Inter_400Regular',
    color: 'black',
    marginTop: 20,
    paddingLeft: 20,
  },
  testimonials: {
    paddingHorizontal: 20,
    marginTop: 70,
  },
  testimonialHeading: {
    fontSize: 31,
    lineHeight: 36,
    fontFamily: 'Inter_400Regular',
  },
});
