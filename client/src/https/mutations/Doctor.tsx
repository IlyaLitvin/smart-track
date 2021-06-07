import {gql} from '@apollo/client'

export const CREATE_DOCTOR = gql`
    mutation CreateDoctor($doctor: DoctorInput) {
        createDoctor(doctor: $doctor) {
            id, name, specialization, email, phone
        }
    }
`;

export const UPDATE_DOCTOR = gql`
    mutation updateDoctor($doctorId: ID, $doctorInput: DoctorInput) {
        updateDoctor(doctorId: $doctorId, doctorInput: $doctorInput) {
            id, name, specialization, email, phone, rooms
        }
    }
`;

export const DELETE_DOCTOR = gql`
    mutation DeleteDoctor($doctorId: ID) {
        deleteDoctor(doctorId: $doctorId)
    }
`;