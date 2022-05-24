import { isValidSubsequence } from '../validateSubsequence';

describe('Is valid subsequence', () => {
    test('Valid', () => {
        expect(isValidSubsequence([], [])).toEqual(true);
        expect(isValidSubsequence([5], [5])).toEqual(true);
        expect(isValidSubsequence([5, 1, 22, 3], [1])).toEqual(true);
        expect(isValidSubsequence([5, 1, 22, 3], [5, 1, 3])).toEqual(true);
        expect(
            isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
        ).toEqual(true);
        expect(isValidSubsequence([5, 1, 1, 22, 3], [1, 1])).toEqual(true);
    });

    test('Not valid', () => {
        expect(isValidSubsequence([5, 1, 22, 3], [6, 7])).toEqual(false);
        expect(isValidSubsequence([5, 1, 22, 3], [22, 1])).toEqual(false);
        expect(isValidSubsequence([5, 1, 22, 3], [5, 22, 1])).toEqual(false);
    });
});
