import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomepageQuickLink({ title, jpgLocation }) {
  return (
    <ImageBackground source={jpgLocation} style={styles.image}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: width * 0.45,
    height: width * 0.36,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 6,
  },
  title: {
    fontSize: 20
  }
});
