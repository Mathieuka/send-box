import {
    gql,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';

const GET_USER = gql`
    query getuser($userId: Int!) {
        user(userId: $userId) {
            id
        }
    }
`;

interface IHome {
    data: any;
    error: any;
}

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // set to true for SSR
        link: createHttpLink({
            uri: 'https://api.graphqlplaceholder.com/',
        }),
        cache: new InMemoryCache(),
    });
}

const Home = ({ data, error }: IHome): JSX.Element => {
    if (data) {
        console.log('[data] ', data);
    }

    if (error) {
        console.log('[error] ', error);
    }

    return <div className="grid grid-rows-home-body">Home</div>;
};

export async function getStaticProps(ctx: any) {
    const apolloClient = createApolloClient();
    try {
        const { data } = await apolloClient.query({
            query: GET_USER,
            variables: { userId: 10 },
        });
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error(error.message);
        return {
            props: {
                error: error.message,
            },
        };
    }
}

export default Home;
