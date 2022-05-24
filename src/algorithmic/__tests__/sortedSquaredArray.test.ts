import { sortedSquaredArray } from '../sortedSquaredArray';

test('Sorted squared array', () => {
    // expect(sortedSquaredArray([1, 2])).toEqual([1, 4]);
    expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([
        1,
        4,
        9,
        25,
        36,
        64,
        81,
    ]);
});
