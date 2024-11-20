import { sweetAndSavory } from '../sweetAndSavory';

describe('Sweet and Savory', () => {
    it('No valid solution', () => {
        expect(sweetAndSavory([12, -1], 10)).toEqual([0, 0]);
    });

    it('Exact positive', () => {
        expect(sweetAndSavory([20, -10], 10)).toEqual([-10, 20]);
    });

    it('Minus 1 - positive target ', () => {
        expect(sweetAndSavory([10, -2, -6, 13], 9)).toEqual([-2, 10]);
    });

    it('Negative target', () => {
        expect(sweetAndSavory([2, -3], -1)).toEqual([-3, 2]);
    });

    it('Negative target X', () => {
        expect(sweetAndSavory([2, 4, -4, -7, 12, 100, -25], -1)).toEqual([
            -4,
            2,
        ]);
    });
});
