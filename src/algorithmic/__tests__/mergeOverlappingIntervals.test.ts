import { mergeOverlappingIntervals } from '../mergeOverlappingIntervals';

describe('Merge overllaping intervals', () => {
    test('no overlapping', () => {
        expect(
            mergeOverlappingIntervals([
                [1, 2],
                [3, 4],
            ])
        ).toEqual([
            [1, 2],
            [3, 4],
        ]);
    });

    test('equal overlapping', () => {
        expect(
            mergeOverlappingIntervals([
                [1, 2],
                [2, 4],
            ])
        ).toEqual([[1, 4]]);
    });

    test('inferior overlapping', () => {
        expect(
            mergeOverlappingIntervals([
                [1, 3],
                [2, 6],
            ])
        ).toEqual([[1, 6]]);
    });

    test('several equal overlapping', () => {
        expect(
            mergeOverlappingIntervals([
                [1, 2],
                [2, 4],
                [4, 5],
            ])
        ).toEqual([[1, 5]]);
    });

    test('random', () => {
        expect(
            mergeOverlappingIntervals([
                [1, 2],
                [3, 5],
                [4, 7],
                [6, 8],
                [9, 10],
            ])
        ).toEqual([
            [1, 2],
            [3, 8],
            [9, 10],
        ]);
    });

    test('random 2', () => {
        expect(
            mergeOverlappingIntervals([
                [1, 10],
                [2, 3],
                [4, 5],
                [6, 7],
                [8, 9],
            ])
        ).toEqual([[1, 10]]);
    });
});
