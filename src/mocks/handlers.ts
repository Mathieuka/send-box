import { graphql } from 'msw';

export const handlers = [
    graphql.query('getUser', (req, res, ctx) => {
        const { userId } = req.variables;
        return res(
            ctx.data({
                user: {
                    name: 'Braconne',
                    id: userId,
                    __typename: 'User',
                },
            })
        );
    }),
];
