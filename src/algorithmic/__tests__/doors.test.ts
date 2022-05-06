import { doors } from '../doors';

describe('Open doors', () => {
    test('1 door', () => {
        expect(doors(1)).toEqual(1);
    });
    test('2 doors', () => {
        expect(doors(2)).toEqual(1);
    });
    test('5 doors', () => {
        expect(doors(5)).toEqual(2);
    });
    test('52900 doors', () => {
        expect(doors(52900)).toEqual(230);
    });
});
