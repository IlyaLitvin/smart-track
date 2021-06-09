import {gql} from '@apollo/client'

export const CREATE_RECEPTIONIST = gql`
    mutation CreateReceptionist($receptionist: ReceptionistInput) {
        createReceptionist(receptionist: $receptionist) {
            id, name, email, phone
        }
    }
`;

export const UPDATE_RECEPTIONIST = gql`
    mutation UpdateAssistant($receptionistId: ID, $receptionistInput: ReceptionistInput) {
        updateAssistant(receptionistId: $receptionistId, receptionistInput: $receptionistInput) {
            id, name, email, phone
        }
    }
`;

export const DELETE_RECEPTIONIST = gql`
    mutation DeleteReceptionist($receptionistId: ID) {
        deleteReceptionist(receptionistId: $receptionistId)
    }
`;