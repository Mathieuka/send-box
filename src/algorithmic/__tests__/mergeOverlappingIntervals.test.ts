import { mergeOverlappingIntervals } from '../mergeOverlappingIntervals';

describe('Merge overllaping intervals', () => {
    test('empty array', () => {
        expect(mergeOverlappingIntervals([])).toEqual([]);
    });

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

    // test('several equal overlapping', () => {
    //     expect(
    //         mergeOverlappingIntervals([
    //             [1, 2],
    //             [2, 4],
    //             [4, 5],
    //         ])
    //     ).toEqual([[1, 5]]);
    // });
});
