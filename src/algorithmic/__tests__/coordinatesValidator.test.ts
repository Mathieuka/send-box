import { isValidCoordinates } from '../coordinatesValidator';

describe('coordinates validator', () => {
    test('valid coordinates', () => {
        expect(isValidCoordinates('-23, -25')).toBeTruthy();
        expect(isValidCoordinates('23, 25')).toBeTruthy();
        expect(isValidCoordinates('24.53525, 23.45235')).toBeTruthy();
        expect(
            isValidCoordinates('56,28926509662671, 39.49578607499929')
        ).toBeTruthy();
    });

    test('specific case', () => {
        expect(
            isValidCoordinates('-35.23800459570652, -49-53221516311359')
        ).toBeTruthy();
    });

    test('not valid coordinates', () => {
        expect(isValidCoordinates('.23, -25')).toBeFalsy();
        expect(isValidCoordinates('.-23, -25')).toBeFalsy();
        expect(isValidCoordinates('- 23, -25')).toBeFalsy();
        // expect(isValidCoordinates('23-, -25')).toBeFalsy();
    });
    test('out of range', () => {
        expect(isValidCoordinates('-90.1, 0')).toBeFalsy();
        expect(isValidCoordinates('90.1, 0')).toBeFalsy();
        expect(isValidCoordinates('0, -180.1')).toBeFalsy();
        expect(isValidCoordinates('0, 180.1')).toBeFalsy();
    });
});
