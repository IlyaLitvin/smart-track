import {gql} from '@apollo/client'

export const CREATE_ASSISTANT = gql`
    mutation CreateAssistant($assistant: AssistantInput) {
        createAssistant(assistant: $assistant) {
            id, name, email, phone
        }
    }
`;

export const UPDATE_ASSISTANT= gql`
    mutation UpdateAssistant($assistantId: ID!, $assistantInput: AssistantInput) {
        updateAssistant(assistantId: $assistantId, assistantInput: $assistantInput) {
            id, name, email, phone
        }
    }
`;

export const DELETE_ASSISTANT = gql`
    mutation DeleteAssistant($assistantId: ID) {
        deleteAssistant(assistantId: $assistantId)
    }
`;