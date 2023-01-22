import { spiralTraverse } from '../spiralTraverse';

describe('spiralTraverse', () => {
    test('should return the correct output on 2x2 matrix', () => {
        const input = [
            [1, 2],
            [4, 3],
        ];

        expect(spiralTraverse(input)).toEqual([1, 2, 3, 4]);
    });

    test('should return the correct output', () => {
        const input = [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ];
        expect(spiralTraverse(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('should return the correct output', () => {
        const input = [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7],
        ];
        expect(spiralTraverse(input)).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
        ]);
    });

    test('At least same quantities of rows as columns', () => {
        const input = [
            [27, 12, 35, 26],
            [25, 21, 94, 11],
            [19, 96, 43, 56],
            [55, 36, 10, 18],
            [96, 83, 31, 94],
            [93, 11, 90, 16],
        ];
        expect(spiralTraverse(input)).toEqual([
            27,
            12,
            35,
            26,
            11,
            56,
            18,
            94,
            16,
            90,
            11,
            93,
            96,
            55,
            19,
            25,
            21,
            94,
            43,
            10,
            31,
            83,
            36,
            96,
        ]);
    });

    test('Simple array', () => {
        const input = [[1, 3, 2, 5, 4, 7, 6]];
        expect(spiralTraverse(input)).toEqual([1, 3, 2, 5, 4, 7, 6]);
    });

    test('multiple rows', () => {
        // eslint-disable-next-line prettier/prettier
        const input = [
            [1],
            [3],
            [2],
            [5],
            [4],
            [7],
            [6]
        ];
        expect(spiralTraverse(input)).toEqual([1, 3, 2, 5, 4, 7, 6]);
    });

    test('More columns then rows', () => {
        // eslint-disable-next-line prettier/prettier
        const input = [
            [1, 2, 3, 4],
            [10, 11, 12, 5],
            [9, 8, 7, 6],
        ];
        expect(spiralTraverse(input)).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
        ]);
    });

    test('More rows then columns', () => {
        const input = [
            [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
            [12, 19, 15, 16, 20, 18, 13, 17, 11, 14],
        ];
        expect(spiralTraverse(input)).toEqual([
            4,
            2,
            3,
            6,
            7,
            8,
            1,
            9,
            5,
            10,
            14,
            11,
            17,
            13,
            18,
            20,
            16,
            15,
            19,
            12,
        ]);
    });
});
