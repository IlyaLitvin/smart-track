import {gql} from '@apollo/client';

export const GET_ALL_RECEPTIONISTS = gql`
    query GetAllReceptionists {
        getAllReceptionists {
            id, name, email, phone
        }
    }    
`

export const GET_CURRENT_RECEPTIONISTS = gql`
    query getReceptionist($id: ID!) {
        getReceptionist(id: $id) {
            id, name, email, phone
        }
    }    
`