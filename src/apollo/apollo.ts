import { useMemo } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { isBrowser } from '../../helpers';
import { getSession } from '../aws-sdk/cognito';

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT;

const httpLink = createHttpLink({
    uri: graphqlUrl,
});

const authLink = setContext(async (_, { headers }) => {
    try {
        const { session } = await getSession();
        const token = await session?.getIdToken().getJwtToken();
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${token}`,
            },
        };
    } catch (err) {
        throw new Error('[apollo.ts] no session found');
    }
});

function createApolloClient() {
    return new ApolloClient({
        ssrMode: !isBrowser(), // set to true for SSR
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
        /* defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
            query: {
                fetchPolicy: 'cache-first',
                errorPolicy: 'all',
            },
            ...other options
        }, */
    });
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

const initialCache = { ROOT_QUERY: { hello: 'world' } };

export function initializeApollo(
    initialState: NormalizedCacheObject = initialCache
): ApolloClient<NormalizedCacheObject> {
    const currentApolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = currentApolloClient.extract();

        // Restore the cache using the data passed from
        // getStaticProps/getServerSideProps combined with the existing cached data
        currentApolloClient.cache.restore({
            ...existingCache,
            ...initialState,
        });
    }

    // For SSG and SSR always create a new Apollo Client
    if (!isBrowser()) return currentApolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = currentApolloClient;
    return currentApolloClient;
}

export default function useApollo(
    initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
    return useMemo(() => initializeApollo(initialState), [initialState]);
}
