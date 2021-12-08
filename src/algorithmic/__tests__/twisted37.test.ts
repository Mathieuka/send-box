import { sortTwisted37 } from '../twisted37';

describe('Twisted 3 and 7 ', () => {
    test('Replace 3 by 7 and sort', () => {
        expect(sortTwisted37([7, 3])).toStrictEqual([7, 3]);
        expect(sortTwisted37([13, 17])).toStrictEqual([17, 13]);
        expect(sortTwisted37([12, 13, 14])).toStrictEqual([12, 14, 13]);
        expect(sortTwisted37([1237, 13, 1273])).toStrictEqual([13, 1273, 1237]);
    });
});
