import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

let [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium,
});

export const fonts = {
  Inter_400Regular,
  Inter_500Medium,
};