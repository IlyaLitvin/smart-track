import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import Header from '../../components/Header/Header';

export default function Sequence({navigation}) {
  return (
    <>
      <Header navigation={navigation} />
      <View>
        <Text>Sequence</Text>
      </View>
    </>
  );
}
