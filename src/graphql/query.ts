import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getuser($userId: Int!) {
        user(userId: $userId) {
            name
            id
        }
    }
`;
