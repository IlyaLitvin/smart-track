import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../../../common/button/Button';
import { useMutation } from '@apollo/client';
import { CREATE_ASSISTANT } from '../../../../https/mutations/Assistant';
import { GET_ALL_ASSISTANTS } from '../../../../https/query/Assistant';
import Assistants from '../../../../components/Assistant/Assistants';
import AssistantsModal from '../../../../components/Modals/AssistantsModal';


export default function AssistantsTab() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newAssistant] = useMutation(CREATE_ASSISTANT, {refetchQueries: [{query: GET_ALL_ASSISTANTS}]});

  const saveAssistant = (item) => {
    newAssistant({
      variables: {
        assistant: item
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
          setModalVisible(true)
        }}
        text="Add new"
      />
      <View>
        <Assistants />
      </View>
      <AssistantsModal assistantUpdate show={modalVisible} saveAssistant={saveAssistant} onHide={()=>setModalVisible(false)} />
    </View>
  );
}
