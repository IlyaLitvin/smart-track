import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AlertsEllipseProps} from '../../types/OtherTypes';

const styles = StyleSheet.create({
  ellipse: {
    borderWidth: 2,
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(116, 195, 134, 0.19)',
    borderColor: 'rgba(116, 195, 134, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 45,
  },
  text: {
    fontSize: 25,
  },
});

export default function AlertsEllipse({
  color,
  textColor = 'black',
  name,
  style,
}: AlertsEllipseProps) {
  return (
    <>
      <View
        style={[
          styles.ellipse,
          {borderColor: color?.replace('0.19', '1'), backgroundColor: color},
          style,
        ]}>
        <Text style={[styles.text, {color: textColor}]}>{name && name[0]}</Text>
      </View>
    </>
  );
}
