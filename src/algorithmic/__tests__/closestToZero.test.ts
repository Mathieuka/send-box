import { closestToZero } from '../closestToZero';

describe('Must return the number closest to 0', () => {
    test('Positive numbers', () => {
        expect(closestToZero([3, 5, 1, 8])).toEqual(1);
    });

    test('Negative numbers', () => {
        expect(closestToZero([-3, -5, -1, -8])).toEqual(-1);
    });

    test('Positive and negative numbers', () => {
        expect(closestToZero([-3, -5, -10, -8, 1])).toEqual(1);
        expect(closestToZero([8, -3, -5, -10, -8])).toEqual(-3);
        expect(closestToZero([-3, 10, -5, -10, -8, 1])).toEqual(1);
    });

    test('Two numbers equals in the array should return null', () => {
        expect(closestToZero([-1, -3, 10, -5, -10, -8, 1])).toEqual(null);
    });
});
