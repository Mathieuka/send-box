import { climbingStairs } from '../climbingStairs';

describe('Should return the ways to climbing the stairs', () => {
    test('1 stair', () => {
        expect(climbingStairs(1)).toEqual(1);
    });

    test('2 stairs', () => {
        expect(climbingStairs(2)).toEqual(2);
    });

    test('3 stairs', () => {
        expect(climbingStairs(3)).toEqual(3);
    });

    test('4 stairs', () => {
        expect(climbingStairs(4)).toEqual(5);
    });

    test('5 stairs', () => {
        expect(climbingStairs(5)).toEqual(8);
    });

    test('6 stairs', () => {
        expect(climbingStairs(6)).toEqual(11);
    });
});
