import { render, screen, waitFor } from '@testing-library/react';
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';
import userEvent from '@testing-library/user-event';
import Home from '../pages/home';

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
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
    const { findByText, getByTestId } = screen;

    render(
        <ApolloProvider client={apolloClient}>
            <Home />
        </ApolloProvider>
    );

    await waitFor(() => {
        const inputName = getByTestId('input-name');
        userEvent.type(inputName, 'Cameron');
        userEvent.click(getByTestId('submit-new-user'));
    });

    expect(await findByText(/Cameron/i)).toBeInTheDocument();
});
