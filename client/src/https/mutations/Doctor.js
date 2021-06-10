import {gql} from '@apollo/client';

export const CREATE_DOCTOR = gql`
  mutation createDoctor($doctor: DoctorInput!) {
    createDoctor(doctor: $doctor) {
      id
      name
      specialization
      email
      phone
    }
  }
`;

export const UPDATE_DOCTOR = gql`
  mutation updateDoc($doctorId:ID!, $doctorInput: DoctorInput) {
     updateDoctor(doctorId: $doctorId, doctorInput: $doctorInput) {
       name, specialization,email,phone,id
    }
  }
`;

export const DELETE_DOCTOR = gql`
    mutation DeleteDoctor($doctorId: ID) {
        deleteDoctor(doctorId: $doctorId)
    }
`;

