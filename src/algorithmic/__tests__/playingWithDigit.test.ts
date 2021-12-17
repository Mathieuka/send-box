import { G964 } from '../playingWithDigit';

describe('Play with digit', () => {
    test('with 2 digit', () => {
        expect(G964.digPow(89, 1)).toEqual(1);
        expect(G964.digPow(92, 1)).toEqual(-1);
        expect(G964.digPow(695, 2)).toEqual(2);
        expect(G964.digPow(114, 3)).toEqual(9);
        expect(G964.digPow(4288, 5)).toEqual(-1);
    });
});
