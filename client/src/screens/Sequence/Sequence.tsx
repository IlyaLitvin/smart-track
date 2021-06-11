import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Picker from '../../common/inputs/Picker';

import Header from '../../components/Header/Header';
import DragAndDrop, {Room} from './DragAndDrop/DragAndDrop';

import {HeaderProps} from '../../types/OtherTypes';
import {useSequanceFeetch} from './hooks';

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
    minHeight: '100%',
  },
});

export default function Sequence({navigation}: HeaderProps) {
  const {rooms, doctors, updateAssignedRooms, deleteRooms} =
    useSequanceFeetch();
  const [selectedDoctor, setSelectedDoctor] = useState({
    id: -1,
    rooms: [],
    name: '',
  });
  const [allRooms, setAllRooms] = useState<{
    assignedRooms: Room[];
    rooms: Room[];
  }>({
    assignedRooms: [],
    rooms: [],
  });

  useEffect(() => {
    if (!rooms && !doctors) {
      return;
    }

    setAllRooms({
      assignedRooms:
        doctors?.find(doctor => +doctor.id === +selectedDoctor.id)?.rooms || [],
      rooms:
        rooms?.filter(room => +room.assignedDoctorId !== +selectedDoctor.id) ||
        [],
    });
  }, [doctors, rooms, selectedDoctor]);

  const selectDocotor = doctor => {
    setSelectedDoctor(doctor);
  };

  const onSelect = (room: Room) => {
    updateAssignedRooms({
      variables: {
        room: {
          id: room.id,
          name: room.name,
          assignedDoctorId: +selectedDoctor.id,
        },
      },
    });
  };

  const onDelete = (room: Room) => {
    deleteRooms({variables: {id: room.id}});
  };

  const onDrop = (room: Room) =>
    updateAssignedRooms({
      variables: {
        room: {
          id: room.id,
          name: room.name,
          assignedDoctorId: -1,
        },
      },
    });

  const onEdit = (room: Room) => console.log(room);
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Choose a Doctor</Text>
          <Picker options={doctors || []} onSelect={selectDocotor} />
        </View>
        <DragAndDrop
          rooms={allRooms.rooms}
          assignedRooms={allRooms.assignedRooms}
          onDelete={onDelete}
          onEdit={onEdit}
          onSelect={onSelect}
          onDrop={onDrop}
        />
      </ScrollView>
    </>
  );
}
