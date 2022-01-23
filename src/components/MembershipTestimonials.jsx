import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function MembershipTestimonials() {
  const allTestimonials = [
    {
      jpgLocation: require('../../assets/Membership-Page/Marie-Flores.jpg'),
      name: 'Marie Flores',
      profession: 'Healthcare Administrator',
      testimonial:
        'Repackaging myself was a nightmare! Thank goodness for the Collaboratory - they helped me with LinkedIn, resumes - everything!',
    },
    {
      jpgLocation: require('../../assets/Membership-Page/James-Smith.jpg'),
      name: 'James Smith',
      profession: 'Tax Attorney',
      testimonial:
        'The Wayfinder Basecamp community and my coach helped me navigate the new virtual world of work!',
    },
    {
      jpgLocation: require('../../assets/Membership-Page/Meredith-Brown.jpg'),
      name: 'Meredith Brown',
      profession: 'Educator',
      testimonial:
        'After so many years of being a teacher, caring for my family, and not finding a job, I was getting depressed. The WIN series cohort showed me that I was not alone and gave me a new confidence.',
    },
  ];

  const parsedTestimonials = allTestimonials.map((person, index) => {
    return (
      <View
        key={`membershipTestimonials.${index}`}
        style={styles.membershipTestimonial}
      >
        <Image source={person.jpgLocation} style={styles.image} />
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.profession}>{person.profession}</Text>
        <Text style={styles.testimonial}>{person.testimonial}</Text>
      </View>
    );
  });

  return (
    <View>
      <View style={styles.parsedTestimonials}>{parsedTestimonials}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  membershipTestimonial: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
  },
  image: {
    borderRadius: 85,
    width: 170,
    height: 170,
    overflow: 'hidden',
    marginTop: 30,
    backgroundColor: 'blue',
  },
  name: {
    marginTop: 20,
    fontSize: 26,
    lineHeight: 32,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
  profession: {
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
  testimonial: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 23,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Inter_500Medium',
  },
  parsedTestimonials: {
    paddingHorizontal: 15,
  },
});
