import { gql } from '@apollo/client';

export const ASSIGNED_ROOM_TO_DOCTOR = gql`
  mutation ($room: RoomInput!) {
    assignRoomToDoctor(room: $room) {
      id
      name
      assignedDoctorId
      assignedDoctor {
        name
      }
    }
  }
`;

export const DELETE_ROOM = gql`
  mutation deleteRoom($id: ID!) {
    deleteRoom(id: $id)
  }
`;

export const EDIT_NAME_ROOM = gql`
    mutation editNameRoom($room:RoomInput!) {
     assignRoomToDoctor(room: $room) {
      name
      id
      assignedDoctorId
      assignedDoctor {
        name
      }
    }
`;

export const ADD_ROOM = gql`
  mutation addRoom($room: RoomInput!) {
    addRoom(room: $room)
  }
`;
