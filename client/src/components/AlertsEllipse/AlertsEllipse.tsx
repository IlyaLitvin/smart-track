import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, Text} from 'react-native';

const styles = StyleSheet.create({
  ellipse: {
    borderWidth: 2,
    borderRadius: 50,
    width: 33,
    height: 33,
    backgroundColor: 'rgba(116, 195, 134, 0.19)',
    borderColor: 'rgba(116, 195, 134, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 45,
  },
  text: {
    fontSize: 33,
  },
});

type AlertsEllipseProps = {
  color: string;
  style?: StyleProp<TextStyle>;
  text?: string;
  textColor?: string;
};

export default function AlertsEllipse({
  color,
  textColor = 'black',
  text,
  style,
}: AlertsEllipseProps) {
  return (
    <View
      style={[
        styles.ellipse,
        {borderColor: color.replace('0.19', '1'), backgroundColor: color},
        style,
      ]}>
      <Text style={[styles.text, {color: textColor}]}>{text && text[0]}</Text>
    </View>
  );
}
