import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Button from '../components/Button';
import HeaderBar from '../components/HeaderBar';
import Input from '../components/Input';
import ContactUs from '../components/ContactUs';

const title = 'Stay in Touch';

const SignUp = ({ params }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheck1 = () => {
    setIsChecked1(() => !isChecked1);
  };
  const handleCheck2 = () => {
    setIsChecked2(() => !isChecked2);
  };

  return (
    <>
      <HeaderBar />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <Text style={styles.text}>Email *</Text>
          <View style={styles.input}>
            <Input placeholder="example@mail.com" />
          </View>
          <Text style={styles.text}>Create a password *</Text>
          <View style={styles.input}>
            <Input placeholder="at least 8 characters" password />
          </View>
          <Text style={styles.text}>Date of birth *</Text>
          <View style={styles.input}>
            <Input placeholder="MM / DD / YYYY" />
          </View>
          <View style={styles.input}>
            <Text style={styles.promise}>
              We want to give you a special treat on your birthday
            </Text>
          </View>
          <View>
            <CheckBox
              checkedColor="#625B71"
              onPress={handleCheck1}
              checked={isChecked1}
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: '#F6F6F6',
              }}
              title={
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Inter_400Regular',
                    paddingLeft: 10,
                  }}
                >
                  Subscribe to newsletter
                </Text>
              }
            />
            <CheckBox
              checkedColor="#625B71"
              onPress={handleCheck2}
              checked={isChecked2}
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: '#F6F6F6',
              }}
              title={
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Inter_400Regular',
                    paddingLeft: 10,
                  }}
                >
                  Find out more about becoming a member so you can enjoy
                  exclusive content and more!
                </Text>
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              text="Stay in touch"
              linkLocation="StayInTouchConfirmationPage"
            />
          </View>
        </View>
        <ContactUs />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },
  input: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promise: {
    color: 'rgba(27, 37, 64, 0.5)',
    fontFamily: 'Inter_400Regular',
    fontSize: 14.85,
    paddingLeft: 5,
    paddingTop: 3,
  },
  text: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    fontSize: 19,
    color: '#1B2540',
    fontFamily: 'Inter_400Regular',
  },
  titleText: {
    color: '#1B2540',
    fontFamily: 'Inter_400Regular',
    fontSize: 55,
    marginTop: 10,
  },
});

export default SignUp;
