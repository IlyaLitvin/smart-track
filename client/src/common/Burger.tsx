import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  wrapper: {
    width: 47,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 30,
    overflow: 'visible',
  },
  line: {
    backgroundColor: 'white',
    height: 2,
    width: 40,
  },
  paddingLeft: {
    left: 7,
  },
});

export function Burger({...props}) {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.wrapper}>
        <View style={styles.line} />
        <View style={{...styles.line, ...styles.paddingLeft}} />
        <View style={styles.line} />
      </View>
    </TouchableOpacity>
  );
}
