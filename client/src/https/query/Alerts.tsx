import {gql} from '@apollo/client';



export const GET_ALL_ALERTS= gql`
query getAllAlerts() {
    getAllAlerts {
        id, name, color, role
    }
}    
`