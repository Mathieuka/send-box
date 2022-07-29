import { isMonotonic } from '../isMonotonic';

describe('Monotonic Array', () => {
    describe('Is Not monotonic', () => {
        test('Positive numbers', () => {
            expect(isMonotonic([1, 3, 2])).toEqual(false);
        });

        test('Negative numbers', () => {
            expect(isMonotonic([-1, -3, -2])).toEqual(false);
        });
    });
    describe('Is Monotonic', () => {
        test('Positive numbers', () => {
            expect(isMonotonic([1, 2, 3])).toEqual(true);
        });

        test('Positive numbers', () => {
            expect(isMonotonic([3, 2, 1])).toEqual(true);
        });

        test('Full zero', () => {
            expect(isMonotonic([0, 0, 0])).toEqual(true);
        });

        test('Full zero', () => {
            expect(isMonotonic([1, 2, 0])).toEqual(false);
        });

        test('Negative numbers', () => {
            expect(isMonotonic([-1, -2, -3])).toEqual(true);
            expect(
                isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])
            ).toEqual(true);
        });
    });
});
