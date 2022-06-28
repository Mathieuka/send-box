import { promisify } from '../promisify';

const add = (
    a: number,
    b: number,
    handleErrorAndValue: (error: unknown, value?: unknown) => unknown
) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        handleErrorAndValue('Bad arguments');
    }

    handleErrorAndValue(null, a + b);
};

// @ts-ignore
const addPromisified = promisify(add);

test('Should promisify add function', async () => {
    const result = await addPromisified(3, 3);
    expect(result).toEqual(6);
});
