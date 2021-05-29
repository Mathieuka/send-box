import { getRealFloor } from '../getRealFloor';

describe('must convert a US floor to European floor', () => {
    test('if USFloor is lower or equal of 0, we should return USFloor', () => {
        expect(getRealFloor(-1)).toEqual(-1);
        expect(getRealFloor(0)).toEqual(0);
        expect(getRealFloor(1)).toEqual(0);
    });

    test('must return USFloor - 1', () => {
        expect(getRealFloor(2)).toEqual(1);
        expect(getRealFloor(5)).toEqual(4);
    });

    test('is USFloor is greater then 13 must return USFloor - 2', () => {
        expect(getRealFloor(15)).toEqual(13);
    });
});
