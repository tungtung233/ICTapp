import { StyleSheet, Text, ScrollView } from 'react-native';

import HomepageQuickLink from './HomepageQuickLink';

export default function Homepage() {
  const allQuickLinks = [
    {title: 'Collaboratory', jpgLocation: require('../../assets/test-square.jpg')},
    {title: 'Community', jpgLocation: require('../../assets/test-square.jpg')},
    {title: 'Workshops', jpgLocation: require('../../assets/test-square.jpg')},
    {title: 'WIN', jpgLocation: require('../../assets/test-square.jpg')},
    {title: 'ICT Wayfinding', jpgLocation: require('../../assets/test-square.jpg')},
    {title: 'Resources', jpgLocation: require('../../assets/test-square.jpg')},
  ]

  const parsedQuickLinks = allQuickLinks.map(element => {
    return (
      <HomepageQuickLink
        key={`quickLinks.${element.title}`}
        title={element.title}
        jpgLocation={element.jpgLocation}
      />
    );
  })

  return (
    <ScrollView>
      {parsedQuickLinks}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
