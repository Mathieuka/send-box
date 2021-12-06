import { checkChoose } from '../colorChoice';

describe('Color choice', () => {
    test(`Should return the number of colors for each poster so that each poster has a unique 
    combination of colors and the number of combinations is exactly the same as the number of posters`, () => {
        expect(checkChoose(6, 4)).toStrictEqual(2);
        expect(checkChoose(4, 4)).toStrictEqual(1);
        expect(checkChoose(4, 2)).toStrictEqual(-1);
        expect(checkChoose(35, 7)).toStrictEqual(3);
        expect(checkChoose(36, 7)).toStrictEqual(-1);
    });
});
