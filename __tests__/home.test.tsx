import { render, screen } from '@testing-library/react';
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';
import Home from '../pages/home';

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // set to true for SSR
        link: new HttpLink({
            uri: 'https://api.graphqlplaceholder.com/',
            fetch: fetch as
                | ((
                      input: RequestInfo,
                      init?: RequestInit | undefined
                  ) => Promise<Response>)
                | undefined,
        }),
        cache: new InMemoryCache(),
    });
}

const apolloClient = createApolloClient();

test('test msw', async () => {
    const { findByText } = screen;

    const { debug } = render(
        <ApolloProvider client={apolloClient}>
            <Home />
        </ApolloProvider>
    );

    expect(await findByText(/Braconne/i)).toBeInTheDocument();
    debug();
});
