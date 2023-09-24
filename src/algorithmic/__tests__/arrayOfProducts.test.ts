import { arrayOfProducts } from '../arrayOfProducts';

describe('arrayOfProducts', () => {
    test('2 numbers', () => {
        expect(arrayOfProducts([4, 4])).toEqual([4, 4]);
    });

    test('3 numbers', () => {
        expect(arrayOfProducts([0, 1, 1])).toEqual([1, 0, 0]);
        expect(arrayOfProducts([1, 2, 3])).toEqual([6, 3, 2]);
        expect(arrayOfProducts([3, 4, 5])).toEqual([20, 15, 12]);
    });

    test.only('4 numbers', () => {
        expect(arrayOfProducts([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
        expect(arrayOfProducts([5, 1, 4, 2])).toEqual([8, 40, 10, 20]);
    });

    test('All products equal 0', () => {
        expect(arrayOfProducts([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
        expect(arrayOfProducts([0, 0, 1, 2, 3])).toEqual([0, 0, 0, 0, 0]);
    });
});
