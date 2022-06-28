import { selectionSort } from '../selectionSort';

test('Selection sort', () => {
    expect(selectionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
});
