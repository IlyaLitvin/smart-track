import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const paddingHorizontal = '6.3888%';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(33, 33, 85, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: paddingHorizontal,
    paddingRight: paddingHorizontal,
    zIndex: 99999999999999,
  },
  child: {
    fontSize: 24,
    color: 'white',
  },
});

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export default function Header({navigation}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.child}>Logo</Text>
    </View>
  );
}
