import { evaporator } from '../evaporator';

test('evaporator', () => {
    expect(evaporator(10, 50, 50)).toEqual(2);
    expect(evaporator(10, 10, 5)).toEqual(29);
    expect(evaporator(10, 10, 10)).toEqual(22);
});
