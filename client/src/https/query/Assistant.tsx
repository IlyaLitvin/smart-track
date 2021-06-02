import {gql} from '@apollo/client';


export const GET_ALL_ASSISTANTS = gql`
    query getAllAssistants() {
        getAllAssistants {
            id, name, email, phone
        }
    }    
`
export const GET_CURRENT_ASSISTANT = gql`
   query getAssistant($id: ID!) {
    getAssistant(id: $id) {
            id, name, email, phone
       }
   }   
`