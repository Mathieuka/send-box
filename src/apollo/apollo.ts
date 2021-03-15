import { useMemo } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    createHttpLink,
} from '@apollo/client';

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // set to true for SSR
        link: createHttpLink({
            uri: 'https://api.graphqlplaceholder.com/',
        }),
        cache: new InMemoryCache(),
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
    if (typeof window === 'undefined') return currentApolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = currentApolloClient;
    return currentApolloClient;
}

export default function useApollo(
    initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
    return useMemo(() => initializeApollo(initialState), [initialState]);
}
