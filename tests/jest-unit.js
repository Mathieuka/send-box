/* eslint-disable global-require */

module.exports = {
    ...require('./jest-common'),
    testEnvironment: 'jest-environment-jsdom',
    displayName: 'unit',
    testMatch: ['**/__tests__/*.(js|jsx|ts|tsx)'],
};
