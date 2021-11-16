import { bubbleSort } from '../bubbleSort';

test('Bubble Sort', () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort([3, 2, 1, 10, 9, 0])).toEqual([0, 1, 2, 3, 9, 10]);
});
