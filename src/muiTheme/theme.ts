import {
    createTheme,
    Theme,
    responsiveFontSizes,
} from '@material-ui/core/styles';
import { red, blueGrey } from '@material-ui/core/colors';

const theme: Theme = responsiveFontSizes(
    createTheme({
        // ...palette example
        palette: {
            type: 'light',
            primary: {
                main: blueGrey[900],
                dark: blueGrey[900],
                light: blueGrey[900],
            },
            secondary: {
                main: red[100],
                dark: red[900],
                light: blueGrey[900],
            },
            error: red,
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            },
        },
    })
);

export default theme;
