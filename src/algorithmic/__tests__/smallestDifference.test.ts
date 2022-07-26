import { smallestDifference } from '../smallestDifference';

describe('Smallest difference', () => {
    test('Equal 0', () => {
        expect(
            smallestDifference([240, 954, 27, 89], [1, 3, 954, 19, 8])
        ).toEqual([954, 954]);
    });

    test('Both array is same size', () => {
        expect(smallestDifference([1], [2])).toEqual([1, 2]);
        expect(smallestDifference([2], [1])).toEqual([2, 1]);
    });

    test('Both array is same size', () => {
        expect(
            smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
        ).toEqual([28, 26]);
    });

    test('Second array is longer then the first', () => {
        expect(smallestDifference([1], [3, 2])).toEqual([1, 2]);
    });

    test('First array is longer then the second', () => {
        expect(smallestDifference([3, 2], [1])).toEqual([2, 1]);
    });
});
