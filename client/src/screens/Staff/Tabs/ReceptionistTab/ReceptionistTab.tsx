import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Receptionist from '../../../../components/Receptionist/Receptionist'

export default function ReceptionistTab() {
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
        <Receptionist />
      </View>
    </View>
  );
}
