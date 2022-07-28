import { moveElementToEnd } from '../moveElementToEnd';

describe('Move target number to the end of array', () => {
    test('Basic', () => {
        expect(moveElementToEnd([2, 1, 1, 2, 2, 3, 4], 2)).toEqual([
            4,
            1,
            1,
            3,
            2,
            2,
            2,
        ]);

        expect(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)).toEqual([
            4,
            1,
            3,
            2,
            2,
            2,
            2,
            2,
        ]);

        expect(moveElementToEnd([2, 2, 2, 0], 2)).toEqual([0, 2, 2, 2]);
    });
});
