import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useCallback } from 'react';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const phoneNumber = '+1 617-468-7837';
const email = 'staff@ictransitions.org';

const twitter = 'https://twitter.com/ICTransitions';
const linkedIn =
  'https://www.linkedin.com/company/institute-for-career-transitions/?viewAsMember=true';
const facebook = 'https://www.facebook.com/ictransitions/';

const termsConditions =
  'https://www.ictransitions.org/general-pages/terms-conditions-and-privacy-statement/';

const MakePhoneCall = () => {
  const handleCall = useCallback(async () => {
    await Linking.openURL(`tel:${phoneNumber}`);
  }, []);

  return (
    <Text style={styles.text} onPress={handleCall}>
      {phoneNumber}
    </Text>
  );
};

const SendEmail = () => {
  const handleEmail = useCallback(async () => {
    const supported = await Linking.canOpenURL(`mailto:${email}`);

    if (supported) {
      await Linking.openURL(`mailto:${email}`);
    } else {
      Alert.alert(`No valid email application`);
    }
  }, []);

  return (
    <Text style={styles.text} onPress={handleEmail}>
      {email}
    </Text>
  );
};

const OpenTwitter = () => {
  const handleTwitter = useCallback(async () => {
    const supported = await Linking.canOpenURL(`${twitter}`);

    if (supported) {
      await Linking.openURL(`${twitter}`);
    } else {
      Alert.alert(`No valid browser application`);
    }
  }, []);

  return (
    <Entypo
      name='twitter-with-circle'
      size={24}
      color='white'
      style={{ marginHorizontal: 5 }}
      onPress={handleTwitter}
    />
  );
};

const OpenLinkedIn = () => {
  const handleLinkedIn = useCallback(async () => {
    const supported = await Linking.canOpenURL(`${linkedIn}`);

    if (supported) {
      await Linking.openURL(`${linkedIn}`);
    } else {
      Alert.alert(`No valid browser application`);
    }
  }, []);

  return (
    <Entypo
      name='linkedin-with-circle'
      size={24}
      color='white'
      style={{ marginHorizontal: 5 }}
      onPress={handleLinkedIn}
    />
  );
};

const OpenFacebook = () => {
  const handleFacebook = useCallback(async () => {
    await Linking.openURL(`${facebook}`);
  }, []);

  return (
    <Entypo
      name='facebook-with-circle'
      size={24}
      color='white'
      style={{ marginHorizontal: 5 }}
      onPress={handleFacebook}
    />
  );
};

const OpenTermsConditions = () => {
  const handleTermsConditions = useCallback(async () => {
    await Linking.openURL(`${termsConditions}`);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleTermsConditions}>
      <View style={styles.bottomContainer}>
        <FontAwesome name='copyright' size={12} color='white' />
        <Text style={styles.text}> 2022 ICT | Terms | Privacy</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function ContactUs() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.header}>Contact Us</Text>
          <MakePhoneCall phoneNumber={phoneNumber} />
          <SendEmail email={email} />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.header}>Follow Us</Text>
          <View style={styles.socialMedia}>
            <OpenTwitter />
            <OpenLinkedIn />
            <OpenFacebook />
          </View>
        </View>
      </View>
      <OpenTermsConditions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 173,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#222D4D',
    marginTop: 30,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  bottomContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  leftColumn: {
    width: '50%',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter_400Regular',
    lineHeight: 22,
    fontSize: 14,
  },
  header: {
    color: 'white',
    fontFamily: 'Inter_500Medium',
    marginBottom: 10,
    fontSize: 16,
  },
  rightColumn: {
    width: '50%',
    marginLeft: 20,
    alignItems: 'center',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
