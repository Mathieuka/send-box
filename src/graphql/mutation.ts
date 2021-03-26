import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($name: String!, $id: String!) {
        AddUser(name: $name, id: $id) {
            status
            users
        }
    }
`;
