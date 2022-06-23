import { findThreeLargestNumbers } from '../findThreeLargestNumberWithoutSorting';

test('Should return the three largest number without sorting the input array', () => {
    expect(findThreeLargestNumbers([5, 7, 2, 3, 9])).toEqual([5, 7, 9]);
    expect(
        findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
    ).toEqual([18, 141, 541]);
});
