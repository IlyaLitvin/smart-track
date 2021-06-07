import {gql} from '@apollo/client'

export const CREATE_ASSISTANT = gql`
    mutation createAssistant($assistant: AssistantInput!) {
        createAssistant(assistant: $assistant) {
            id, name, email, phone
        }
    }
`;

export const UPDATE_ASSISTANT= gql`
    mutation updateAssistant($assistantId: ID!, $assistantInput: AssistantInput!) {
        updateAssistant(assistantId: $assistantId, assistantInput: $assistantInput!) {
            id, name, email, phone
        }
    }
`;

export const DELETE_ASSISTANT = gql`
    mutation deleteAssistant($assistantId: ID!) {
        deleteAssistant(assistantId: $assistantId) {
        }
    }
`;