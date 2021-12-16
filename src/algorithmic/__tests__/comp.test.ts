import { comp } from '../comp';

describe(`Should return true if the 2 array have the same element
                and the same multiplicity`, () => {
    test('Should return true', () => {
        const a = [11, 9];
        const b = [121, 81];
        expect(comp(a, b)).toEqual(true);
    });

    test('Array with different lenght, should return true', () => {
        const a = [11, 9, 5, 9];
        const b = [121, 81, 25, 43, 81];
        expect(comp(a, b)).toEqual(true);
    });

    test('Array with different length, should return false', () => {
        const a = [11, 9, 5, 9, 9];
        const b = [121, 81, 25, 43, 81];
        expect(comp(a, b)).toEqual(false);
    });

    test('Should return true', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
        expect(comp(a, b)).toEqual(true);
    });
});
