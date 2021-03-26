import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser($userId: Int!) {
        user(userId: $userId) {
            name
            id
        }
    }
`;
