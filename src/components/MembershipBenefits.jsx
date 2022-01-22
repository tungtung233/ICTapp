import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function MembershipBenefits() {
  const allBenefits = [
    {
      desc: 'Discounts on public events and exclusive member only offerings',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      desc: 'Access to the WIN series',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      desc: 'Access to the Wayfinder Collaborative Basecamp',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      desc: 'Access to the Collaboratory',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      desc: 'Access to the Member Community',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
  ];

  const parsedBenefits = allBenefits.map((element, index) => {
    return (
      <ImageBackground
        key={`membershipBenefits.${index}`}
        source={element.jpgLocation}
        style={styles.image}
      >
        <Text style={styles.desc}>{element.desc}</Text>
      </ImageBackground>
    );
  });

  return (
    <View style={styles.membershipBenefits}>
      <View style={styles.parsedBenefits}>{parsedBenefits}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  membershipBenefits: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  image: {
    borderRadius: 15,
    width: 370,
    height: 125,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 10,
  },
  desc: {
    width: 2 * (width * 0.45) + 12,
    marginTop: 5,
    fontSize: 15,
    padding: 20,
    color: 'white',
  },
  parsedBenefits: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
