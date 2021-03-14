import { ReactNode } from 'react';
import { within } from '@testing-library/react';
import { MockApolloClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';
import theme from '../muiTheme';
import Routes from '../../helpers/routes';
import locales from '../i18n/local';
import { Lang } from '../i18n/types';

interface IProvider {
    children?: ReactNode;
}

interface IAllTheProviders {
    path?: Routes;
    mockApolloClient?: MockApolloClient;
}

export const createAllTheProviders = (obj: IAllTheProviders) =>
    function callBack({ children }: IProvider): JSX.Element {
        const { mockApolloClient, path } = obj;
        const localeCopy = locales[Lang.en];
        const messages = localeCopy[path || ''];
        return (
            <ApolloProvider
                client={mockApolloClient || ({} as MockApolloClient)}
            >
                <MuiThemeProvider theme={theme}>
                    <IntlProvider
                        locale="en"
                        defaultLocale="en"
                        messages={messages as Record<string, string>}
                    >
                        {children}
                    </IntlProvider>
                </MuiThemeProvider>
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

export interface ImockRouter {
    push: jest.Mock<any, any>;
    pathname: Routes;
}

interface ICreateMockRouter {
    spyOnMockRouter: jest.SpyInstance<any, any>;
    mockRouter: ImockRouter;
}

export const createMockRouter = (obj: {
    pathname: Routes;
}): ICreateMockRouter => {
    const mockRouter = {
        push: jest.fn(),
        pathname: obj.pathname,
    };

    return {
        spyOnMockRouter: jest.spyOn(mockRouter, 'push'),
        mockRouter,
    };
};
