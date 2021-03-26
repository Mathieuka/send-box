import { graphql } from 'msw';
import faker from 'faker';

let users = [
    {
        name: faker.name.firstName(),
        id: faker.random.uuid(),
        __typename: 'User',
    },
];

export const handlers = [
    graphql.query('getAllUsers', (req, res, ctx) =>
        res(
            ctx.data({
                users,
            })
        )
    ),
    graphql.query('getUser', (req, res, ctx) => {
        const { userId } = req.variables;
        return res(
            ctx.data({
                user: [
                    {
                        name: 'Braconne',
                        id: userId,
                        __typename: 'User',
                    },
                ],
            })
        );
    }),
    graphql.mutation('addUser', (req, res, ctx) => {
        const { name } = req.variables;
        users = [
            ...users,
            { name, id: faker.random.uuid(), __typename: 'User' },
        ];
        return res(
            ctx.data({
                status: 'Success',
                users,
            })
        );
    }),
];
