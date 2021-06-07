import {gql} from '@apollo/client';

export const DELETE_DOCTOR = gql`
    mutation DeleteDoctor($doctorId: ID) {
        deleteDoctor(doctorId: $doctorId)
    }
`