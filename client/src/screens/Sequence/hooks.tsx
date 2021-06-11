import {
  MutationFunctionOptions,
  MutationUpdaterFn,
  useMutation,
  useQuery,
} from '@apollo/client';
import {
  ADD_ROOM,
  ASSIGNED_ROOM_TO_DOCTOR,
  DELETE_ROOM,
  EDIT_NAME_ROOM,
} from '../../https/mutations/Room';
import {GET_ALL_ROOMS_AND_DOCTORS} from '../../https/query/OtherQuery';
import {Doctor} from '../../types/OtherTypes';
import {Room} from './DragAndDrop/DragAndDrop';

interface QueryDoctorsAndRoomsTypes {
  getAllRooms: Room[];
  getAllDoctors: Doctor[];
}

const updateCache: MutationUpdaterFn = (store, {data: resp}) => {
  const data = store.readQuery<QueryDoctorsAndRoomsTypes>({
    query: GET_ALL_ROOMS_AND_DOCTORS,
  });
  const room = resp?.assignRoomToDoctor;

  store.writeQuery({
    query: GET_ALL_ROOMS_AND_DOCTORS,
    data: {
      getAllRooms: data?.getAllRooms.map(r => (+r.id === +room.id ? room : r)),
      getAllDoctors: data?.getAllDoctors.map(doctor => ({
        ...doctor,
        rooms: [
          ...(doctor?.rooms
            ? doctor.rooms.filter(r => +room.id !== +r.id)
            : []),
          ...(+doctor.id === +room.assignedDoctorId ? [room] : []),
        ],
      })),
    },
  });
};

const updateCacheAfterDelete: MutationUpdaterFn = (store, {data: resp}) => {
  const data = store.readQuery<QueryDoctorsAndRoomsTypes>({
    query: GET_ALL_ROOMS_AND_DOCTORS,
  });
  const id = resp?.deleteRoom;
  store.writeQuery({
    query: GET_ALL_ROOMS_AND_DOCTORS,
    data: {
      getAllRooms: data?.getAllRooms.filter(room => +room.id !== +id),
      getAllDoctors: data?.getAllDoctors.map(doctor => ({
        ...doctor,
        rooms: doctor.rooms?.filter(room => +id !== +room.id),
      })),
    },
  });
};

export function useSequanceFeetch(): {
  rooms: Room[] | undefined;
  doctors: Array<any> | undefined;
  updateAssignedRooms(item: MutationFunctionOptions): void;
  deleteRooms(item: MutationFunctionOptions): void;
  addRoom(item: MutationFunctionOptions): void;
  updateRoom(item: MutationFunctionOptions): void;
} {
  const {data} = useQuery<QueryDoctorsAndRoomsTypes>(GET_ALL_ROOMS_AND_DOCTORS);

  const [updateAssignedRooms] = useMutation(ASSIGNED_ROOM_TO_DOCTOR, {
    update: updateCache,
  });
  const [deleteRooms] = useMutation(DELETE_ROOM, {
    update: updateCacheAfterDelete,
  });

  const [updateRoom] = useMutation(EDIT_NAME_ROOM);
  const [addRoom] = useMutation(ADD_ROOM);

  return {
    rooms: data?.getAllRooms,
    doctors: data?.getAllDoctors,
    updateAssignedRooms,
    deleteRooms,
    updateRoom,
    addRoom,
  };
}
