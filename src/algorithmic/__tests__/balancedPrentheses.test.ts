// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { balancedParentheses } from '../balancedParentheses';

describe('All parentheses are balanced', () => {
    test('Is not balanced', () => {
        expect(balancedParentheses('(()))')).toEqual(false);
        expect(balancedParentheses('(}')).toEqual(false);
    });

    test('Is balanced', () => {
        expect(balancedParentheses('[{()}]')).toEqual(true);
        expect(balancedParentheses('[({()})]')).toEqual(true);
    });
});
