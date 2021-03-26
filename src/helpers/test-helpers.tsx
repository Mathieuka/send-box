import { ReactNode } from 'react';
import { within } from '@testing-library/react';
import { MockApolloClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../muiTheme';

interface IProvider {
    children?: ReactNode;
}

interface IAllTheProviders {
    mockApolloClient?: MockApolloClient;
}

export const createAllTheProviders = (obj: IAllTheProviders) =>
    function callBack({ children }: IProvider): JSX.Element {
        const { mockApolloClient } = obj;

        return (
            <ApolloProvider
                client={mockApolloClient || ({} as MockApolloClient)}
            >
                <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
            </ApolloProvider>
        );
        return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
    };

// see https://codesandbox.io/s/material-ui-react-issue-with-react-testing-library-33k1q?file=/src/__tests__/material-ui-dialog.js:182-743
export const materialUITestHelper = {
    expectInputByRoleToHaveValue: (
        getByRoleFn: (role: string) => HTMLElement,
        role: string,
        value: string
    ): void =>
        expect(getByRoleFn(role).querySelector('input')).toHaveValue(value),
    expectTestIdToBeInTheDocument: (dataTestId: string): void => {
        expect(
            within(document.body).getByTestId(dataTestId)
        ).toBeInTheDocument();
    },
    expectTestIdToNotBeInTheDocument: (dataTestId: string): void => {
        expect(
            within(document.body).getByTestId(dataTestId)
        ).not.toBeInTheDocument();
    },
    expectTestIdToHaveTextContent: (dataTestId: string, text: string): void => {
        expect(within(document.body).getByTestId(dataTestId)).toHaveTextContent(
            text
        );
    },
};
