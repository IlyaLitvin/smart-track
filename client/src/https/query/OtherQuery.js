import {gql} from '@apollo/client';
export const GET_ALL_ROOMS_AND_DOCTORS = gql`
  {
    getAllRooms {
      id
      name
      assignedDoctorId
      assignedDoctor {
        name
      }
    }
    getAllDoctors {
      id
      name
      rooms {
        name
        id
        assignedDoctorId
        assignedDoctor {
          name
        }
      }
    }
  }
`;
