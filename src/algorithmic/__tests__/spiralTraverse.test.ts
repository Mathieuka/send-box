import { spiralTraverse } from '../spiralTraverse';

describe('spiralTraverse', () => {
    test('should return the correct output', () => {
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
});
