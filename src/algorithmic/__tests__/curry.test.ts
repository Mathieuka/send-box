import { curry } from '../curry';

test('Curry', () => {
    const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
    const curried = curry(sum);

    expect(curried()).toEqual(0);
    expect(curried(1, 2)()).toEqual(3);
    expect(curried(1)(2)()).toEqual(3);
    expect(curried(1)(1, 2)()).toEqual(4);
});
