/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, '..'),
    // setupFilesAfterEnv: ['@testing-library/jest-dom'],
    setupFilesAfterEnv: [path.join(__dirname, '/setup-env.js')],
    moduleDirectories: [
        'node_modules',
        path.join(__dirname, 'src'),
        path.join(__dirname, 'tests'),
    ],
};
