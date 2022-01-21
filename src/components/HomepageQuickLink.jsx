import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomepageQuickLink({ title, jpgLocation }) {
  return (
    <ImageBackground source={jpgLocation} style={styles.image}>
      <Text>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    width: width * 0.35,
    height: width * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 15,
  },
});
