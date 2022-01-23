import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import HeaderBar from './HeaderBar';

import HomepageQuickLink from './HomepageQuickLink';

const { height, width } = Dimensions.get('window');

export default function Homepage() {
  const allQuickLinks = [
    {
      title: 'Membership',
      jpgLocation: require('../../assets/Homepage/Membership.jpg'),
    },
    {
      title: 'Collaboratory',
      jpgLocation: require('../../assets/Homepage/Collaboratory.jpg'),
    },
    {
      title: 'Workshops',
      jpgLocation: require('../../assets/Homepage/Workshops.jpg'),
    },
    {
      title: 'Resources',
      jpgLocation: require('../../assets/Homepage/Resources.jpg'),
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
    <>
      <HeaderBar />
      <View style={styles.homepage}>
        <Text
          style={styles.heading}
        >{`INSTITUTE\nFOR CAREER\nTRANSITIONS`}</Text>
        <Text
          style={styles.text}
        >{`Helping experienced professionals regroup, recover, and strategize.`}</Text>
        <View style={styles.quickLinks}>{parsedQuickLinks}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#F6F6F6',
  },
  heading: {
    width: 2 * (width * 0.45) + 12,
    marginTop: 5,
    fontSize: 41,
    lineHeight: 58,
    color: '#8c929c',
    fontFamily: 'Inter_400Regular',
  },
  text: {
    width: 2 * (width * 0.45) + 12,
    marginTop: 8,
    fontSize: 21,
    lineHeight: 33,
    color: '#1B2540',
    fontFamily: 'Inter_400Regular',
  },
  quickLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 35,
  },
});
