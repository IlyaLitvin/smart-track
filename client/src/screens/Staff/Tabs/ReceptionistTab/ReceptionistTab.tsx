import React, { useState } from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Receptionists from '../../../../components/Receptionist/Receptionists';
import ReceptionistsModal from '../../../../components/Modals/ReceptionistsModal';
import { useMutation } from '@apollo/client';
import { CREATE_RECEPTIONIST } from '../../../../https/mutations/Receptionist';
import { GET_ALL_RECEPTIONISTS } from '../../../../https/query/Receptionist';
import { IReceptionist } from '../../../../components/Receptionist/Receptionist';

export default function ReceptionistTab() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newReceptionist] = useMutation(CREATE_RECEPTIONIST, {refetchQueries: [{query: GET_ALL_RECEPTIONISTS}]});

  const saveReceptionist = (item: IReceptionist) => {
    newReceptionist({
      variables: {
        receptionist: item
      },
    });
  };

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
        <Receptionists />
      </View>
      <ReceptionistsModal show={modalVisible} saveReceptionist={saveReceptionist} onHide={()=>setModalVisible(false)} />
    </View>
  );
}
