import { getNthFib } from '../fibonacci';

test('Return nth fibonacci number', () => {
    expect(getNthFib(1)).toEqual(0); // 0
    expect(getNthFib(2)).toEqual(1); // 0, 1
    expect(getNthFib(3)).toEqual(1); // 0, 1, 1
    expect(getNthFib(4)).toEqual(2); // 0, 1, 1, 2
    expect(getNthFib(5)).toEqual(3); // 0, 1, 1, 2, 3
    expect(getNthFib(6)).toEqual(5); // 0, 1, 1, 2, 3, 5
});
