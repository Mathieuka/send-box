module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'prettier',
        'testing-library',
        'jest-dom',
        // 'cypress',
    ],
    extends: [
        'plugin:cypress/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',

        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:testing-library/recommended',
        'plugin:jest-dom/recommended',
    ],
    rules: {
        '@typescript-eslint/no-var-requires': 0,
        'react/require-default-props': 0,
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'no-restricted-syntax': 'off',
        'react/display-name': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'import/extensions': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/aria-role': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['~'],
            },
        },
    },
};
