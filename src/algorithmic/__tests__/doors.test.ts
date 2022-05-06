import { doors } from '../doors';

describe('Open doors', () => {
    test('1', () => {
        expect(doors(1)).toEqual(1);
    });
    test('2', () => {
        expect(doors(2)).toEqual(1);
    });
    test('5 ', () => {
        expect(doors(5)).toEqual(2);
    });
    test('52900 ', () => {
        console.time('CONSOLE TIME');
        expect(doors(52900)).toEqual(230);
        console.timeEnd('CONSOLE TIME');
    });
});
