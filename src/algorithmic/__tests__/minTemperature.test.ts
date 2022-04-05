import { minTemperature } from '../minTemperature';

describe('Return the lowest temperature', () => {
    test('With positive numbers', () => {
        expect(minTemperature([30, 5, 10])).toEqual(5);
    });

    test('With negative numbers', () => {
        expect(minTemperature([-30, -5, -10])).toEqual(-5);
        expect(minTemperature([-273])).toEqual(-273);
    });

    test('With negative and positive numbers', () => {
        expect(minTemperature([-5, 5, -30, -5, -10])).toEqual(5);
        expect(minTemperature([42, -5, 12, 21, 5, 24, -5])).toEqual(5);
    });
});
