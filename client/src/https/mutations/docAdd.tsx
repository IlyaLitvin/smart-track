import {gql} from '@apollo/client'

export const CREATE_DOCTOR = gql`
    mutation CreateDoctor($doctor: DoctorInput) {
        createDoctor(doctor: $doctor) {
            id, name, specialization, email, phone
        }
    }
`