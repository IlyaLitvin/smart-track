import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Card from '../../common/Card';

export default function Receptionist() {
  return (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        minHeight: '100%',
        paddingTop: 24,
        paddingHorizontal: 16,
      }}>
      <Button
        onPress={() => {
          console.log('s');
        }}
        text="Add new"
      />
      <View>
        <Card item={{id: 1, name: 'name', color: 'fff'}} />
      </View>
    </View>
  );
}
