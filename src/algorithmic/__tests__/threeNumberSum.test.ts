import { threeNumberSum } from '../threeNumberSum';

describe(`Should find all triplets in the array that sum up to the target sum
                and return a two dimensional array of all these triplets`, () => {
    test('threeNumberSum', () => {
        expect(threeNumberSum([2, 3, 4, 5], 10)).toEqual([[2, 3, 5]]);
        expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([
            [-8, 2, 6],
            [-8, 3, 5],
            [-6, 1, 5],
        ]);

        expect(threeNumberSum([8, 10, -2, 49, 14], 57)).toEqual([[-2, 10, 49]]);

        expect(
            threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0)
        ).toEqual([
            [-8, 2, 6],
            [-8, 3, 5],
            [-6, 0, 6],
            [-6, 1, 5],
            [-5, -1, 6],
            [-5, 0, 5],
            [-5, 2, 3],
            [-1, 0, 1],
        ]);
    });
});
