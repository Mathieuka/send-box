import { tandemBicycle } from '../tandemBicycle';

describe('Should return max or min total speed', () => {
    test('Return max total speed', () => {
        expect(tandemBicycle([1, 0], [0, 4], true)).toEqual(5);
        // expect(tandemBicycle([1, 2], [3, 4], true)).toEqual(7);
        // expect(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)).toEqual(
        //     32
        // );
    });

    test('Return min total speed', () => {
        // expect(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false)).toEqual(
        //     25
        // );
        // expect(tandemBicycle([1, 2], [3, 4], false)).toEqual(7);
    });
});
