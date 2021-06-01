import {gql} from '@apollo/client'

export const CREATE_RECEPTIONIST = gql`
    mutation createReceptionist($receptionist: ReceptionistInput!) {
        createReceptionist(receptionist: $receptionist) {
            id, name, email, phone
        }
    }
`

export const UPDATE_RECEPTIONIST = gql`
    mutation updateAssistant($receptionistId: ID!, $receptionistInput: ReceptionistInput!) {
        updateAssistant(receptionistId: $receptionistId, receptionistInput: $receptionistInput!) {
            id, name, email, phone
        }
    }
`

export const DELETE_RECEPTIONIST = gql`
    mutation deleteReceptionist($receptionistId: ID!) {
        deleteReceptionist(receptionistId: $receptionistId) {
        }
    }
`