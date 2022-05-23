import { twoNumberSum } from '../twoNumbersSumUp';

describe('Returns in array the 2 numbers whose sum is equal to the target value else return an empty array', () => {
    test('Sum not found', () => {
        expect(twoNumberSum([], 10)).toEqual([]);
    });

    test('2 positive numbers', () => {
        expect(twoNumberSum([4, 6], 10)).toEqual([4, 6]);
    });

    test('3 positive numbers', () => {
        expect(twoNumberSum([9, 6, 4], 10)).toEqual([6, 4]);
    });

    test('2 negative numbers', () => {
        expect(twoNumberSum([15, -5], 10)).toEqual([15, -5]);
    });
});
