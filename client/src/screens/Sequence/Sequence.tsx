import {useMutation, useQuery} from '@apollo/client';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Picker from '../../common/inputs/Picker';
import Header from '../../components/Header/Header';
import {GET_ALL_ROOMS_AND_DOCTORS} from '../../https/query/OtherQuery';
import {ASSIGNED_ROOM_TO_DOCTOR, DELETE_ROOM} from '../../https/mutations/Room';

import DragAndDrop from './DragAndDrop/DragAndDrop';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
  wrapper: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
});

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

const updateCache = (store, {data: resp}) => {
  const data = store.readQuery({query: GET_ALL_ROOMS_AND_DOCTORS});
  const room = resp.assignRoomToDoctor;

  store.writeQuery({
    query: GET_ALL_ROOMS_AND_DOCTORS,
    data: {
      getAllRooms: data.getAllRooms.map(r => (+r.id === +room.id ? room : r)),
      getAllDoctors: data.getAllDoctors.map(doctor => ({
        ...doctor,
        rooms: [
          ...doctor.rooms.filter(r => +room.id !== +r.id),
          ...(+doctor.id === +room.assignedDoctorId ? [room] : []),
        ],
      })),
    },
  });
};

const updateCacheAfterDelete = (store, {data: resp}) => {
  const data = store.readQuery({query: GET_ALL_ROOMS_AND_DOCTORS});
  const id = resp.deleteRoom;
  store.writeQuery({
    query: GET_ALL_ROOMS_AND_DOCTORS,
    data: {
      getAllRooms: data.getAllRooms.filter(room => +room.id !== +id),
      getAllDoctors: data.getAllDoctors.map(doctor => ({
        ...doctor,
        rooms: doctor.rooms.filter(room => +id !== +room.id),
      })),
    },
  });
};

export default function Sequence({navigation}: HeaderProps) {
  const {data, loading} = useQuery(GET_ALL_ROOMS_AND_DOCTORS);
  const [updateAssignedRooms] = useMutation(ASSIGNED_ROOM_TO_DOCTOR);
  const [deleteRooms] = useMutation(DELETE_ROOM);
  const [selectedDoctor, setSelectedDoctor] = useState({
    id: -1,
    rooms: [],
    name: '',
  });
  console.log(data);
  const [allRooms, setAllRooms] = useState({
    assignedRooms: [],
    rooms: [],
  });

  useEffect(() => {
    if (loading) return;
    setAllRooms({
      assignedRooms:
        data.getAllDoctors.find(doctor => doctor.id === selectedDoctor.id)
          ?.rooms || [],

      rooms: data.getAllRooms.filter(
        room => +room.assignedDoctorId !== +selectedDoctor.id,
      ),
    });
  }, [data, selectedDoctor, loading]);

  const selectDocotor = doctor => {
    setSelectedDoctor(doctor);
  };

  const onSelect = value => {
    updateAssignedRooms({
      variables: {
        room: {
          id: value.id,
          name: value.name,
          assignedDoctorId: +selectedDoctor.id,
        },
      },
      update: updateCache,
    });
  };

  const onDelete = (roomId: number) => {
    deleteRooms({variables: {id: roomId}, update: updateCacheAfterDelete});
  };

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Choose a Doctor</Text>
          <Picker
            options={data?.getAllDoctors || []}
            onSelect={selectDocotor}
          />
        </View>
        <DragAndDrop
          rooms={allRooms.rooms}
          assignedRooms={allRooms.assignedRooms}
          onDelete={onDelete}
          onEdit={console.log}
          onSelect={onSelect}
        />
      </View>
    </>
  );
}
