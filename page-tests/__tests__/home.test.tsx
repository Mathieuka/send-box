import { fn } from '../../pages/home';

test('Test driven', () => {
    expect(fn()).toStrictEqual(null);
});
