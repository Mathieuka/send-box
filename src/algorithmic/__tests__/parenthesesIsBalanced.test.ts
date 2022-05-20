import { parenthesesIsBalanced } from '../parenthesesIsBalanced';

describe('Parentheses is balanced', () => {
    test('Is balanced', () => {
        expect(parenthesesIsBalanced('()')).toEqual(true);
        expect(parenthesesIsBalanced('()()')).toEqual(true);
        expect(parenthesesIsBalanced('(())')).toEqual(true);

        expect(parenthesesIsBalanced('[][]')).toEqual(true);
        expect(parenthesesIsBalanced('[][]')).toEqual(true);
        expect(parenthesesIsBalanced('[[]]')).toEqual(true);

        expect(parenthesesIsBalanced('{}')).toEqual(true);
        expect(parenthesesIsBalanced('{}{}')).toEqual(true);
        expect(parenthesesIsBalanced('{{}}')).toEqual(true);
    });

    test('Is not balanced', () => {
        expect(parenthesesIsBalanced('')).toEqual(false);

        expect(parenthesesIsBalanced('(')).toEqual(false);
        expect(parenthesesIsBalanced(')')).toEqual(false);
        expect(parenthesesIsBalanced('(()')).toEqual(false);

        expect(parenthesesIsBalanced('[')).toEqual(false);
        expect(parenthesesIsBalanced(']')).toEqual(false);
        expect(parenthesesIsBalanced('[[]')).toEqual(false);
    });
});
