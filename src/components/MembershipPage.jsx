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
    marginBottom: 20
  }
});
