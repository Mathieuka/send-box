import { checkChoose } from '../colorChoice';

describe('Color choice', () => {
    test(`Should return the number of colors for each poster so that each poster has a unique 
    combination of colors and the number of combinations is exactly the same as the number of posters`, () => {
        expect(checkChoose(6, 4)).toStrictEqual([
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
    });
});
