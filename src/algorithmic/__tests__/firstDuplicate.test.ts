import { firstDuplicateValue } from '../firstDuplicate';

describe('Should return the first duplicate', () => {
    test('Length 0', () => {
        expect(firstDuplicateValue([0])).toEqual(-1);
    });

    test('Length 1', () => {
        expect(firstDuplicateValue([1])).toEqual(-1);
    });

    test('Length 2', () => {
        expect(firstDuplicateValue([1, 2])).toEqual(-1);
        expect(firstDuplicateValue([1, 1])).toEqual(1);
    });

    test.skip('Length 3', () => {
        expect(firstDuplicateValue([1, 2, 2])).toEqual(2);
        expect(firstDuplicateValue([1, 2, 1])).toEqual(1);
    });

    test('Length 4', () => {
        // expect(firstDuplicateValue([3, 2, 2, 3])).toEqual(2);
        expect(firstDuplicateValue([2, 3, 3, 2])).toEqual(3);
    });

    test('Length 6', () => {
        expect(firstDuplicateValue([1, 1, 3, 2, 2, 3])).toEqual(1);
    });
});
