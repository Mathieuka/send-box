/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, '..'),
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
    watchPlugins: [
        'jest-watch-select-projects',
        'jest-watch-typeahead/testname',
        'jest-watch-typeahead/filename',
    ],
};
