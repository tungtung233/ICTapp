import {
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

const { width } = Dimensions.get('window');

export default function MembershipPage() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
      </ScrollView>
    );
  }
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
    marginBottom: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 190,
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
});
