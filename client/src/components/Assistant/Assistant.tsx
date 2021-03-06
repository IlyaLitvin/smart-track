/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import EditSvg from '../../assets/images/Edit.svg';
import TrashSvg from '../../assets/images/trash-2 2.svg';
import Stethoscope from '../../assets/images/stethoscope 4.svg';
import AssistantsModal from '../Modals/AssistantsModal';
import {
  DELETE_ASSISTANT,
  UPDATE_ASSISTANT,
} from '../../https/mutations/Assistant';
import {useMutation} from '@apollo/client';
import {GET_ALL_ASSISTANTS} from '../../https/query/Assistant';
import {IAssistant, IAssistantProps} from '../../types/OtherTypes';

export default function Assistant({assistant, index}: IAssistantProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteAssistant] = useMutation(DELETE_ASSISTANT);
  const [updateAssistant] = useMutation(UPDATE_ASSISTANT);

  const assistantDelete = (id: number) => {
    deleteAssistant({
      variables: {doctorId: id},
      refetchQueries: [{query: GET_ALL_ASSISTANTS}],
    });
  };

  // eslint-disable-next-line no-shadow
  const assistantUpdate = (id: number, assistant: IAssistant) => {
    const updatedAssistant = {
      name: assistant.name,
      email: assistant.email,
      phone: assistant.phone,
    };
    updateAssistant({
      variables: {assistantId: id, assistantInput: updatedAssistant},
      refetchQueries: [{query: GET_ALL_ASSISTANTS}],
    });
  };

  return (
    <View key={assistant.id} style={styles.assistWrapper}>
      <View style={styles.mainWrapper} />
      <Text style={styles.postNumber}>{index}</Text>
      <View style={styles.mainBox}>
        <Text style={styles.name}>{assistant.name}</Text>
        <Text style={styles.mail}>{assistant.email}</Text>
        <Text style={styles.phone}>{assistant.phone}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Stethoscope style={{width: 15, height: 15, marginRight: 29}} />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <EditSvg style={{width: 15, height: 15, marginRight: 29}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => assistantDelete(assistant.id)}>
          <TrashSvg style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>
      <AssistantsModal
        assistantUpdate={assistantUpdate}
        assistant={assistant}
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  assistWrapper: {
    backgroundColor: '#FFF',
    width: 327,
    height: 157,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  mainWrapper: {
    width: 36,
    height: '100%',
    backgroundColor: '#6AC7BE',
    opacity: 0.3,
    borderTopLeftRadius: 20,
  },
  postNumber: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#212121',
  },
  mainBox: {
    paddingTop: 40,
    paddingLeft: 23,
    paddingBottom: 20,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    marginBottom: 20,
  },
  mail: {
    fontSize: 14,
    lineHeight: 21,
    color: '#212121',
    marginBottom: 8,
  },
  phone: {
    fontSize: 14,
    lineHeight: 21,
    color: '#212121',
    marginBottom: 8,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
