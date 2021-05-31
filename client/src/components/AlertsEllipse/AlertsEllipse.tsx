import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  ellipse: {
    borderWidth: 2,
    borderRadius: 50,
    width: 33,
    height: 33,
    backgroundColor: 'rgba(116, 195, 134, 0.19)',
    borderColor: 'rgba(116, 195, 134, 1)',
  },
});

export default function AlertsEllipse({color}) {
  return <View style={styles.ellipse} />;
}
