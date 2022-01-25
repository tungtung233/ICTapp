import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import HeaderBar from '../components/HeaderBar';

const { width, height } = Dimensions.get('window');

export default function StayInTouchConfirmationPage({ route }) {
  const [countDown, setCountDown] = useState(route.params.timerSeconds);

  const navigation = useNavigation();

  useEffect(() => {
    setCountDown(route.params.timerSeconds)
  }, [route])

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => setCountDown(countDown - 1), 1000);
    }

    if (countDown === 0) {
      setTimeout(() => navigation.navigate('Homepage'), 1000);
    }
  }, [countDown]);

  return (
    <>
      <HeaderBar />
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(246, 246, 246, 1)', 'transparent']}
          style={styles.backgroundGradient}
        />
        <ImageBackground
          source={require('../../assets/StayInTouch-Page/Background.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.text}>
            <Text style={styles.heading}>Thank you for subscribing!</Text>
            <Text style={styles.subheading}>
              We'll be in touch with news and events.
            </Text>
            <Text style={styles.redirect}>
              {countDown > 0 &&
                `Redirecting back to homepage in ${countDown}...`}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  text: {
    height: height - 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: width,
    height: height - 50,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: height * 0.5,
    width: width,
    elevation: 1,
  },
  heading: {
    fontFamily: 'Inter_400Regular',
    color: 'white',
    fontSize: 52,
    textAlign: 'center',
    width: '100%',
  },
  subheading: {
    fontFamily: 'Inter_500Medium',
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    width: '70%',
    marginTop: 15,
  },
  redirect: {
    color: 'white',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 20,
  }
});
