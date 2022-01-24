import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBar from './HeaderBar';

const { width, height } = Dimensions.get('window');

export default function StayInTouchConfirmationPage() {
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
    marginBottom: 40,
  },
});
