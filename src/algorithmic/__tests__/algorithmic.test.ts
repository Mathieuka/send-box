import { addLetters } from '../algorithmic';

describe('Test Driven https://www.codewars.com/kata/5d50e3914861a500121e1958/train/typescript', () => {
    test('If there is no argument', () => {
        expect(addLetters()).toEqual('z');
    });

    test('If there only one argument', () => {
        expect(addLetters('b')).toEqual('b');
    });

    test('If several arguments is added and give a result less then 26', () => {
        expect(addLetters('b', 'd')).toEqual('f');
        expect(addLetters('f', 'j', 'b')).toEqual('r');
        expect(addLetters('o', 'a', 'x', 'a', 'w', 'a', 'c', 'j')).toEqual('z');
    });

    test('If two arguments is added and give a result greater then 26', () => {
        expect(addLetters('z', 'b')).toEqual('b');
    });
});
