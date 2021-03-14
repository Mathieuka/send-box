import '../styles/globals.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/muiTheme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <>
        <Head>
            <title>Back-Office</title>
        </Head>
        <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
        </MuiThemeProvider>
    </>
);

export default MyApp;
