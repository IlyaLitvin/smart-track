import {gql} from '@apollo/client';

export const CREATE_ALERT = gql`
  mutation createAlert($alert: AlertInput!) {
    createAlert(alert: $alert) {
      name
      color
    }
  }
`;

export const UPDATE_ALERT = gql`
  mutation updateAlert($alertId: ID!, $alert: AlertInput!) {
    updateAlert(alertId: $alertId, alert: $alert) {
      id
      name
      color
    }
  }
`;

export const DELETE_ALERT = gql`
  mutation deleteAlert($alertId: ID) {
    deleteAlert(alertId: $alertId)
  }
`;
