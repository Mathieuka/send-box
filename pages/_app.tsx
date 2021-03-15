import '../styles/globals.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/muiTheme';
import useApollo from '../src/apollo';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Head>
                <title>Back-Office</title>
            </Head>
            <MuiThemeProvider theme={theme}>
                <Component {...pageProps} />
            </MuiThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
