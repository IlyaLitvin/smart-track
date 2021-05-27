import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';

export default function Dashboard({navigation}) {
  return (
    <>
      <Header navigation={navigation} />
      <View>
        <Text>Dashboard</Text>
      </View>
    </>
  );
}
