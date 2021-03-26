import '../styles/globals.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/muiTheme';
import useApollo from '../src/apollo';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    // eslint-disable-next-line global-require
    require('../src/mocks');
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Head>
                <title>Back-Office</title>
            </Head>
            <MuiThemeProvider theme={theme}>
                <Component {...pageProps} apolloClient={apolloClient} />
            </MuiThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
