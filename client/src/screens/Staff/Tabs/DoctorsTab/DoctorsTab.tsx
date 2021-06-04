import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Doctors from '../../../../components/Doctors/Doctors';
import DocModal from '../../../../components/AddDoctorModal/AddDoctor';

export default function DoctorsTab() {
  const [modalVisible, setModalVisible] = useState(false)

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
      <DocModal show={modalVisible} onHide={()=> setModalVisible(false)} />
      <View>
        <Doctors />
      </View>
    </View>
  );
}