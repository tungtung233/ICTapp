import { Linking } from 'react-native';
import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

export default function PhoneCall() {
  const handleCall = useCallback(async () => {
    await Linking.openURL(`tel:+123456789`);
  }, []);

  return (
    <Feather name='phone-call' size={24} color='black' onPress={handleCall} />
  );
}
