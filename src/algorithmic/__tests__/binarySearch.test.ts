import { binarySearch } from '../binarySearch';

const hugeArray: number[] = [];
for (let idx = 0; idx < 1000; idx += 1) {
    hugeArray.push(idx);
}
describe('binarySearch', () => {
    test('should return an empty array', () => {
        expect(binarySearch()).toStrictEqual(-1);
        expect(binarySearch([])).toStrictEqual(-1);
    });

    test('fail to found the right index', () => {
        expect(binarySearch([1, 2, 3, 4], 10)).toEqual(-1);
    });

    test('should return the right index', () => {
        expect(binarySearch([10], 10)).toEqual(0);
        expect(binarySearch([1, 2], 2)).toEqual(1);
        expect(binarySearch([1, 2, 3, 4], 1)).toEqual(0);
        expect(binarySearch([1, 2, 3, 4], 3)).toEqual(2);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 3)).toEqual(2);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 2)).toEqual(1);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 7)).toEqual(6);
        expect(binarySearch(hugeArray, 702)).toEqual(702);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).toEqual(5);
    });
});
