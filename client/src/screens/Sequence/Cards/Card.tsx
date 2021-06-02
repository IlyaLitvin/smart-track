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
    borderRadius: 100,
    backgroundColor: 'rgba(106, 199, 190, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 10,
  },
  wrapper: {
    width: '28.3333%',
    shadowColor: 'rgba(32, 43, 93, 0.8)',
    elevation: 15,
    backgroundColor: 'white',
    paddingBottom: 21,
    paddingRight: 12.36,
    paddingLeft: 12.75,
    alignItems: 'center',
    paddingTop: 12.75,
    borderRadius: 20,
    borderBottomRightRadius: 0,
  },
  name: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
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
      <Text style={styles.name}>Alex Sample</Text>
    </View>
  );
}
