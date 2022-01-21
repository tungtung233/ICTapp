import { StyleSheet, Text, View } from 'react-native';

import HomepageQuickLink from './HomepageQuickLink';

export default function Homepage() {
  return (
    <HomepageQuickLink
      title='Collaboratory'
      jpgLocation={require('../../assets/test-square.jpg')}
    />
  );
}

const styles = StyleSheet.create({});
