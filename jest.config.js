/* eslint-disable global-require */
module.exports = {
    ...require('./tests/jest-common'),
    testPathIgnorePatterns: ['/node_modules/'],
    projects: ['./tests/jest-unit.js'],
};
