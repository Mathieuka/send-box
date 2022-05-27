function expect(actual) {
    return {
        toBe: (expected) => {
            if (actual === expected) {
                return true;
            }
            // eslint-disable-next-line no-throw-literal
            throw {
                message: `expected ${JSON.stringify(
                    actual
                )} to be ${JSON.stringify(expected)}`,
            };
        },
        toBeType: (type) => {
            // eslint-disable-next-line valid-typeof
            if (typeof actual === type) {
                return true;
            }
            // eslint-disable-next-line no-throw-literal
            throw {
                message: `expected ${JSON.stringify(
                    actual
                )} to be of type ${JSON.stringify(
                    type
                )} but got ${JSON.stringify(typeof actual)}`,
            };
        },
        toExist: () => {
            if (actual !== undefined && actual !== null) {
                return true;
            }
            // eslint-disable-next-line no-throw-literal
            throw {
                message: `expected value to exist but got ${JSON.stringify(
                    actual
                )}`,
            };
        },
    };
}

function it(testCaseName, func) {
    console.log(`beginning test case ${testCaseName}`);
    try {
        func();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch ({ message }) {
        // eslint-disable-next-line no-throw-literal
        throw { message, testCaseName };
    }
}

function describe(testSuiteName, func) {
    console.log(`beginning test suite ${testSuiteName}`);
    try {
        func(testSuiteName, func);
        console.log(`successfully completed test suite ${testSuiteName}`);
    } catch ({ message, testCaseName }) {
        console.error(
            `failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${message}`
        );
    }
}

describe('Add', () => {
    it('Add 2 numbers', () => {
        expect(1 + 1).toBe(2);
        expect('yep').toExist();
        expect(1).toBeType('number');
    });
});
