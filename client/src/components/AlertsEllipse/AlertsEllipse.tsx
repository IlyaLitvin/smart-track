import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

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

interface AlertsEllipseProps {
  color: string;
  style?: StyleProp<ViewStyle>;
}

export default function AlertsEllipse({color, style}: AlertsEllipseProps) {
  return (
    <View
      style={[
        styles.ellipse,
        {borderColor: color.replace('0.19', '1'), backgroundColor: color},
        style,
      ]}
    />
  );
}
