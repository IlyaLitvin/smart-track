import {gql} from '@apollo/client'

export const CREATE_DOCTOR = gql`
    mutation createDoctor($doctor: DoctorInput) {
        createDoctor(doctor: $doctor) {
            id, name, specialization, email, phone
        }
    }
`