import {
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import MembershipBenefits from './MembershipBenefits';
import MembershipTestimonials from './MembershipTestimonials';

const { width } = Dimensions.get('window');

export default function MembershipPage() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/test-square.jpg')}
          style={styles.membershipImage}
        >
          <Text style={styles.membershipImageTitle}>Membership</Text>
        </ImageBackground>
      </View>
      <View style={styles.membershipIntro}>
        <Text style={styles.membershipIntroTitle}>Private.</Text>
        <Text style={styles.membershipIntroTitle}>Online.</Text>
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
            width: 194,
            height: 47,
            borderRadius: 10,
            backgroundColor: 'grey',
          }}
          onPress={() => navigation.navigate('KeepInTouch')}
          title='Become a member'
        ></Button>
      </View>
      <View style={styles.benefits}>
        <Text style={styles.benefitsHeading}>Member benefits include:</Text>
        <MembershipBenefits />
      </View>
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <Button
          buttonStyle={{
            width: 194,
            height: 47,
            borderRadius: 10,
            backgroundColor: 'grey',
          }}
          onPress={() => navigation.navigate('KeepInTouch')}
          title='Become a member'
        ></Button>
      </View>
      <View style={styles.testimonials}>
        <Text style={styles.testimonialHeading}>What people are saying:</Text>
        <MembershipTestimonials />
      </View>
      <Text>{`\n\n\n`}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  membershipImage: {
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 180,
    width: width - 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  membershipImageTitle: {
    fontSize: 45,
    lineHeight: 52,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Inter_400Regular',
  },
  membershipIntro: {
    paddingHorizontal: 20,
  },
  membershipIntroTitle: {
    fontSize: 45,
    lineHeight: 52,
    paddingVertical: -5,
    fontFamily: 'Inter_400Regular',
  },
  membershipIntroSubheading: {
    fontSize: 19,
    fontFamily: 'Inter_500Medium',
    lineHeight: 28,
  },
  membershipIntroDesc: {
    fontSize: 19,
    paddingTop: 15,
    lineHeight: 28,
    fontFamily: 'Inter_400Regular',
  },
  orientation: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  orientationSubheading: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    lineHeight: 20,
  },
  orientationDate: {
    fontSize: 24,
    fontFamily: 'Inter_500Medium',
    lineHeight: 34,
  },
  benefits: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  benefitsHeading: {
    fontSize: 30,
    fontFamily: 'Inter_400Regular',
    lineHeight: 34,
  },
  testimonials: {
    alignItems: 'center',
    marginTop: 30,
  },
  testimonialHeading: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: 'Inter_500Medium',
  },
});
