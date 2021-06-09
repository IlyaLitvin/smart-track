import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {max} from 'react-native-reanimated';
import Card from './Cards/Card';

const styles = StyleSheet.create({
  wrapperCards: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  fieldWrapper: {
    width: '100%',
    minHeight: 141,
    borderColor: 'rgba(106, 199, 190, 1)',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 0.1,
    marginBottom: 34,
    marginTop: 21,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'space-between',
  },
  fieldText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(106, 199, 190, 1)',
  },
  field: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
});

export interface Room {
  id: number;
  assignedDoctor: {name: string};
  assignedDoctorId: number;
  name: 'string';
}

interface DragAndDropProps {
  rooms: Array<Room>;
  assignedRooms: Array<Room>;
  onSelect: (room: Room) => void;
  onDelete: (id: number) => void;
  onEdit: (room: Room) => void;
  onDrop?: (id: number) => void;
}

export default function DragAndDrop({
  rooms = [],
  assignedRooms,
  onSelect,
  onDelete,
  onEdit,
  onDrop,
}: DragAndDropProps) {
  const ref: React.RefObject<View> = useRef(null);
  const [fieldProps, setFieldProps] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  return (
    <View>
      <View style={styles.fieldWrapper}>
        {assignedRooms.map(room => {
          return (
            <Card
              key={room.id}
              fieldProps={fieldProps}
              room={room}
              onSelect={onSelect}
              onDelete={onDrop}
              onEdit={onEdit}
            />
          );
        })}

        <View
          style={styles.field}
          ref={ref}
          onLayout={() => {
            ref.current?.measure((x, y, width, height, pageX, pageY) => {
              setFieldProps({x: pageX, y: pageY, width, height});
            });
          }}>
          <Text style={styles.fieldText}>Drag and Drop rooms to the box</Text>
        </View>
      </View>
      <Text style={styles.title}>Drag and Drop rooms to the box</Text>
      <View style={styles.wrapperCards}>
        {rooms.map(room => {
          return (
            <Card
              onSelect={onSelect}
              onDelete={onDelete}
              onEdit={onEdit}
              key={room.id}
              fieldProps={fieldProps}
              room={room}
            />
          );
        })}
      </View>
    </View>
  );
}
