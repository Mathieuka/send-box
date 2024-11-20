import { powerset } from '../powerset';

describe('Powerset', () => {
    test('sample', () => {
        expect(powerset([])).toEqual(1);
    });
});
