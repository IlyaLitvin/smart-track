import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Close from '../../../assets/images/Close.svg';
import Edit from '../../../assets/images/Edit.svg';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 1.25,
  },
  ellipse: {
    width: 35,
    height: 35,
  },
  wrapper: {
    width: '28.3333%',
    shadowColor: 'rgba(32, 43, 93, 0.8)',
    elevation: 15,
    backgroundColor: 'white',
  },
});

export default function Card() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Close />
        <Edit />
      </View>
      <View style={styles.ellipse}>
        <Text>1b</Text>
      </View>
      <Text>Alex Sample</Text>
    </View>
  );
}
