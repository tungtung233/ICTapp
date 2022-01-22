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
  return (
    <ScrollView style={styles.membershipPage}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/test-square.jpg')}
          style={styles.membershipImage}
        >
          <Text style={styles.membershipImageTitle}>Membership</Text>
        </ImageBackground>
      </View>
      <Text style={styles.d3}>Private.</Text>
      <Text style={styles.d3}>Online.</Text>
      <Text style={styles.s2}>
        Designed to provide the support you need right now.
      </Text>
      <Text style={styles.b2}>
        A job search is a marathon, not a sprint. It's hard work and often lonely. Our community provides a supportive, safe and empowering fellowship.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  membershipPage: {
    height: '100%',
  },
  header: {
    alignItems: 'center',
  },
  membershipImage: {
    margin: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 190,
    width: width - 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  membershipImageTitle: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
  },
  d3: {
    fontSize: 52,
    paddingHorizontal: 20,
  },
  s2: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  b2: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
});
