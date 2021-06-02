import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Assistant from '../../../../components/Assistant/Assistant'


export default function AssistantsTab() {
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
        <Assistant />
        <Assistant />
      </View>
    </View>
  );
}
