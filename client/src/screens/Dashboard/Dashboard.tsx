import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export default function Dashboard({navigation}: HeaderProps) {
  return (
    <>
      <Header navigation={navigation} />
      <View>
        <Text>Dashboard</Text>
      </View>
    </>
  );
}
