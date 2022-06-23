import { insertionSort } from '../insertionSort';

test('Should sort the array in asc order', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([8, 5, 9, 7, 6])).toEqual([5, 6, 7, 8, 9]);
    expect(insertionSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
});
