import { firstDuplicateValue } from '../firstDuplicate';

describe('Should return the first duplicate', () => {
    test('Length 2', () => {
        expect(firstDuplicateValue([1, 2])).toEqual(-1);
        expect(firstDuplicateValue([1, 1])).toEqual(1);
    });
});
