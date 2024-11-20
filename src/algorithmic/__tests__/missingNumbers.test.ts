import { missingNumbers } from '../missingNumbers';

describe('missing numbers', () => {
    it('nums.length equal 0 & n equal 2', () => {
        expect(missingNumbers([])).toStrictEqual([1, 2]);
    });

    it('nums.length equal 1 & n equal 3', () => {
        expect(missingNumbers([1])).toStrictEqual([2, 3]);
        expect(missingNumbers([2])).toStrictEqual([1, 3]);
        expect(missingNumbers([3])).toStrictEqual([1, 2]);
    });
});
