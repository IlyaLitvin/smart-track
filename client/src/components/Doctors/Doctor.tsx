import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {GET_ALL_DOCTORS} from '../../https/query/Doctor';
import EditSvg from '../../assets/images/Edit.svg';
import TrashSvg from '../../assets/images/trash-2 2.svg';
import DoctorAlerts from '../DoctorAlerts/DoctorAlerts';
import { DELETE_DOCTOR, UPDATE_DOCTOR } from '../../https/mutations/Doctor';
import DocModal from '../Modals/DoctorsModal';
import { IRoom } from '../Room/Room';

export interface IDoctor {
  id: number,
  name: string,
  email: string,
  phone: string,
  specialization: string,
  rooms?: [],
}

interface IProps {
  doctor: IDoctor,
  index: number,
  docDelete?: (doctorId: number) => void,
  doctorUpdate?: (doctorId: number, doctor: IDoctor) => void,
}

export default function Doctors({doctor,index}: IProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteDoctor] = useMutation(DELETE_DOCTOR);
  const [updateDoctor] = useMutation(UPDATE_DOCTOR);

  const docDelete = (id: number) => {
    deleteDoctor({
      variables:{doctorId: id},
      refetchQueries: [{query: GET_ALL_DOCTORS}]
    });
  };

  const doctorUpdate = (id: number, doctor: IDoctor) => {   
    const updatedDoctor = {
        name: doctor.name,
        email: doctor.email,
        phone: doctor.phone,
        specialization: doctor.specialization,
    };
    updateDoctor({
      variables: {doctorId: id, doctorInput: updatedDoctor},
      refetchQueries: [{query: GET_ALL_DOCTORS}],
    });
  };
  
  return (     
        <View key={doctor.id} style={styles.docWrapper}>
          <View
            style={{
              width: 36,
              height: '100%',
              backgroundColor: '#6AC7BE',
              opacity: 0.3,
              borderTopLeftRadius: 20,
            }}></View>
          <Text style={styles.postNumber}>{index}</Text>
          <View style={styles.mainBox}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.mail}>{doctor.email}</Text>
            <Text style={styles.phone}>{doctor.phone}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.rooms}>Rooms</Text>
              <Text style={styles.roomsName}>
                {doctor.rooms && doctor.rooms.map((room: IRoom) => room.name + ' ')}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <DoctorAlerts />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 12,
              top: 12,
            }}>
            <TouchableOpacity onPress={()=> setModalVisible(true)}>
              <EditSvg style={{width: 15, height: 15, marginRight: 29}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> docDelete(doctor.id)}>
              <TrashSvg style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>          
            <DocModal show={modalVisible} doctorUpdate={doctorUpdate} doctor={doctor} onHide={()=> setModalVisible(false)} />
        </View>
  );
}

const styles = StyleSheet.create({
  docWrapper: {
    backgroundColor: '#FFF',
    width: 327,
    height: 203,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 15,
    flexDirection: 'row',
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
  rooms: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#212121',
    marginBottom: 8,
    marginRight: 20,
  },
  roomsName: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 8,
    color: '#212121',
  },
});
