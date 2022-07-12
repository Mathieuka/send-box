import { caesarCipherEncryptor } from '../caesarCypher';

describe('caesarCipherEncryptor', () => {
    test('Shift of 1', () => {
        expect(caesarCipherEncryptor('abc', 1)).toEqual('bcd');
    });

    test('Shift of 2', () => {
        expect(caesarCipherEncryptor('matt', 2)).toEqual('ocvv');
    });

    test('Is able to return to the beginning of the alphabet - Shift 1', () => {
        expect(caesarCipherEncryptor('xyz', 1)).toEqual('yza');
    });

    test('Is able to return to the beginning of the alphabet - Shift 2', () => {
        expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab');
    });

    test('Is able to return to the beginning of the alphabet - Shift 2', () => {
        expect(caesarCipherEncryptor('d', 100)).toEqual('z');
    });
});
