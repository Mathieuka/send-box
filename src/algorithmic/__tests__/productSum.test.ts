import { productSum } from '../productSum';

test('Return the product sum ', () => {
    expect(productSum([1])).toEqual(1);
    expect(productSum([1, 1])).toEqual(2);
    expect(productSum([1, [2, 4], 1])).toEqual(14); // 1 + (2 * 2)
    expect(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toEqual(12); // 1 + (2 * 2)
});
