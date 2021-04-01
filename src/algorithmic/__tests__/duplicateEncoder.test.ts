// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
import { duplicateEncode } from '../duplicateEncoder';

describe('duplicate encode', () => {
    test('encode uniq letters in word', () => {
        expect(duplicateEncode('Ssdin')).toEqual('))(((');
        expect(duplicateEncode('dinotrapu')).toEqual('(((((((((');
        expect(duplicateEncode('dinotrap ')).toEqual('(((((((((');
    });

    test('encode multiple letters in word', () => {
        expect(duplicateEncode('  ')).toEqual('))');
        expect(duplicateEncode('  -')).toEqual('))(');
    });
});
