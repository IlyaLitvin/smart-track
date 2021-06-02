import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Doctors from '../../../../components/Doctors/Doctors'

export default function DoctorsTab() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E5E5E5',
        minHeight: '100%',
        paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 10
      }}>
      <Button
        onPress={() => {
          console.log('s');
        }}
        text="Add new"
      />
      <View>
        <Doctors />
      </View>
    </View>
  );
}
