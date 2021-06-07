import {gql} from '@apollo/client';

export const GET_ALL_DOCTORS = gql`
  query GetAllDoctors {
    getAllDoctors {
      id
      name
      specialization
      email
      phone
      rooms {
        id
        name
        assignedDoctor {
          name
        }
      }
    }
  }
`;

export const GET_ALL_ROOMS = gql`
 query GetAllRooms {
    getAllRooms {
      id
      name
      assignedDoctor {
        name
      }
    }
  }
`;

export const GET_CURRENT_DOCTOR = gql`
  query getDoctor($id: ID) {
    getDoctor(id: $id) {
      id
      name
      specialization
      email
      phone
      rooms
    }
  }
`;

export const GET_DOCTOR_ROOMS = gql`
  query getDoctorRooms($id: ID!) {
    getDoctorRooms(id: $id) {
      name
      timeStatus
      status
      assignedDoctorId
    }
  }
`;
