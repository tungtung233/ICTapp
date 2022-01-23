import {
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomepageQuickLink({ title, jpgLocation }) {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate(title)}
      style={styles.darken}
    >
      <ImageBackground source={jpgLocation} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: width * 0.45,
    height: width * 0.45,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  darken: {
    borderWidth: 0,
    borderRadius: 15,
    overflow: 'hidden',
    margin: 6,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Inter_500Medium',
    marginBottom: 15,
  },
});
