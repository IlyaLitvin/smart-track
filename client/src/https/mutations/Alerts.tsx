import {gql} from '@apollo/client'

export const CREATE_ALERT = gql`
    mutation createAlert($alert: AlertInput) {
        createAlert(alert: $alert) {
            id, name, color, role
        }
    }
`;

export const UPDATE_ALERT = gql`
    mutation alertId($alertId: ID, $alertInput: AlertInput) {
        alertId(alertId: $alertId, alertInput: $alertInput) {
            id, name, color, role
        }
    }
`;

export const DELETE_ALERT = gql`
    mutation deleteAlert($alertId: ID) {
        deleteAlert(alertId: $alertId) {
        }
    }
`;