import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Doctors from '../../../../components/Doctors/Doctors';
import DocModal from '../../../../components/AddDoctorModal/AddDoctor';
import { CREATE_DOCTOR } from '../../../../https/mutations/Doctor';
import { useMutation } from '@apollo/client';
import { GET_ALL_DOCTORS } from '../../../../https/query/Doctor';

export default function DoctorsTab() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newDoctor] = useMutation(CREATE_DOCTOR, {refetchQueries: [{ query: GET_ALL_DOCTORS }]});
 
  const saveDoctor=(item)=>{
    newDoctor({
      variables: {
        doctor: item
      },
    });
  };
  
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
          setModalVisible(true);
        }}
        text="Add new"
      />
      <DocModal show={modalVisible} saveDoctor={saveDoctor} onHide={()=> setModalVisible(false)} />
      <View>
        <Doctors />
      </View>
    </View>
  );
}