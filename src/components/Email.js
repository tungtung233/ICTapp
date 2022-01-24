import * as React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as MailComposer from 'expo-mail-composer';

async function sendEmailAsync() {
  let result = await MailComposer.composeAsync({
    recipients: ['ICT@careertransitions.com'],
    subject: 'Requesting ICT info',
    body: 'Hi, this is e-mail from your mobile app ✅. I am interested in',
  });

  alert(result.status);
}

export default class Email extends React.Component {
  render() {
    return (
      <View>
        <Ionicons
          name="mail-outline"
          size={30}
          color="#1B2540"
          onPress={sendEmailAsync}
        />
      </View>
    );
  }
}
