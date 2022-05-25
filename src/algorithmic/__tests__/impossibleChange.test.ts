import { nonConstructibleChange } from '../impossibleChange';

describe('Return the minimum impossible change ', () => {
    test('Several coins', () => {
        expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toEqual(20);
        expect(nonConstructibleChange([3, 1])).toEqual(2);
        expect(nonConstructibleChange([1, 2, 5])).toEqual(4);
    });

    test('Zero coins', () => {
        expect(nonConstructibleChange([])).toEqual(1);
    });

    test('One coins of 1', () => {
        expect(nonConstructibleChange([1])).toEqual(2);
    });

    test('One coins higher than 1', () => {
        expect(nonConstructibleChange([2])).toEqual(1);
    });

    test('Same coins', () => {
        expect(nonConstructibleChange([1, 1, 1])).toEqual(4);
    });

    test('Successive coins', () => {
        expect(nonConstructibleChange([1, 2, 3, 4, 5, 6, 7])).toEqual(29);
    });
});
