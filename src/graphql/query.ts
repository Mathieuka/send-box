import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query getAllUsers {
        users {
            name
            id
        }
    }
`;

export const GET_USER = gql`
    query getUser($userId: Int!) {
        user(userId: $userId) {
            name
            id
        }
    }
`;
