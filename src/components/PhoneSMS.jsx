import { Linking } from 'react-native';
import React, { useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function PhoneSMS() {
  const handleSMS = useCallback(async () => {
    await Linking.openURL(`sms:+123456789?body=test message`);
  }, []);

  return (
    <MaterialIcons name='message' size={24} color='black' onPress={handleSMS} />
  );
}
