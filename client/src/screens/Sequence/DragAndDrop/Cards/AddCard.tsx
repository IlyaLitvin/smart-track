import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Plus from './img/Plus.svg';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  plus: {
    marginBottom: 9,
  },
  text: {
    color: 'rgba(106, 199, 190, 1)',
  },
});

export default function AddCard() {
  return (
    <View style={styles.wrapper}>
      <Plus style={styles.plus} />
      <Text style={styles.text}>Add a Room</Text>
    </View>
  );
}
