import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomepageQuickLink from './HomepageQuickLink';

const { height, width } = Dimensions.get('window');

export default function Homepage() {
  const navigation = useNavigation();

  const allQuickLinks = [
    {
      title: 'Collaboratory',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      title: 'Community',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      title: 'Workshops',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    { title: 'WIN', jpgLocation: require('../../assets/test-square.jpg') },
    {
      title: 'ICT Wayfinding',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
    {
      title: 'Resources',
      jpgLocation: require('../../assets/test-square.jpg'),
    },
  ];

  const parsedQuickLinks = allQuickLinks.map((element) => {
    return (
      <HomepageQuickLink
        key={`quickLinks.${element.title}`}
        title={element.title}
        jpgLocation={element.jpgLocation}
      />
    );
  });

  return (
    <View style={styles.homepage}>
      <Text style={styles.text}>{`Lorem ipsum dolor sit amet,`}</Text>
      <Text style={styles.text}>{`consectetur adipiscing elit.`}</Text>
      <View style={styles.quickLinks}>{parsedQuickLinks}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    width: 2 * (width * 0.45) + 12,
    marginTop: 5,
    fontSize: 20,
  },
  quickLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    height: height - 150,
  },
});
