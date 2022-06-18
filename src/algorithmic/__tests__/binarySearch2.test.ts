import { binarySearch } from '../binarySearch2';

describe('Binary search', () => {
    test('Should return -1 if the value is not found', () => {
        expect(binarySearch([], 2)).toEqual(-1);
        expect(binarySearch([1, 2], 10)).toEqual(-1);
    });

    test('Should return index of the element', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
    });
});
