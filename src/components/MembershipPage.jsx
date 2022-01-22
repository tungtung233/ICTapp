import {
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function MembershipPage() {
  return <ScrollView style={styles.membershipPage}></ScrollView>;
}

const styles = StyleSheet.create({
  membershipPage: {
    height: '100%',
  },
});
