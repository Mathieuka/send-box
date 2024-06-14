import { getPermutations } from '../getPermutation';

describe('getPermutation', () => {
    test.skip('2 values', () => {
        expect(getPermutations([1, 2])).toEqual([
            [1, 2],
            [2, 1],
        ]);
    });

    test('sample 3 values', () => {
        expect(getPermutations([1, 2, 3])).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);
    });
});
