import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Picker from '../../common/inputs/Picker';

import Header from '../../components/Header/Header';
import DragAndDrop, {Room} from './DragAndDrop/DragAndDrop';
import {Doctor} from '../../types/OtherTypes';

import {HeaderProps} from '../../types/OtherTypes';
import {useSequenceFetch} from './hooks';
import Modal from './Modal/Modal';

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
    minHeight: '100%',
  },
  head: {
    marginVertical: 30,
  },
});

type StateDoctor = {
  id: number;
  rooms: Room[];
  name: string;
};

type StateRooms = {
  assignedRooms: Room[];
  rooms: Room[];
};

export default function Sequence({navigation}: HeaderProps) {
  const {
    rooms,
    doctors,
    addRoom,
    updateRoom,
    updateAssignedRooms,
    deleteRooms,
  } = useSequenceFetch();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | StateDoctor>({
    id: -1,
    rooms: [],
    name: '',
  });

  const [allRooms, setAllRooms] = useState<StateRooms>({
    assignedRooms: [],
    rooms: [],
  });

  const [isView, setIsView] = useState(false);
  const [item, setItem] = useState<Room | null>(null);

  useEffect(() => {
    if (!rooms && !doctors) {
      return;
    }

    setAllRooms({
      assignedRooms:
        doctors?.find(doctor => +doctor.id === +selectedDoctor.id)?.rooms || [],
      rooms:
        rooms?.filter(
          room =>
            +room.assignedDoctorId !== +selectedDoctor.id ||
            +selectedDoctor.id === -1,
        ) || [],
    });
  }, [doctors, rooms, selectedDoctor]);

  const selectDocotor = (doctor: Doctor) => {
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

  const onEdit = (room: Room) => {
    setIsView(true);
    setItem(room);
  };
  const onAdd = () => setIsView(true);

  const onSave = (room: Room) => {
    setItem(null);
    setIsView(false);
    if (room.id) {
      updateRoom({
        variables: {
          room: {
            id: room.id,
            name: room.name,
          },
        },
      });
    } else {
      addRoom({
        variables: {
          room: {
            name: room.name,
          },
        },
      });
    }
  };
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.wrapper}>
        <View style={styles.head}>
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
            onAdd={onAdd}
          />
        </View>
      </ScrollView>
      {isView ? <Modal onSave={onSave} room={item} /> : null}
    </>
  );
}
