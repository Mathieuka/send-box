import { findTheRabbit } from '../rabbit';

const holes = Array.from({ length: 4 }).fill('_') as string[];

test('Find the rabbit', () => {
    expect(findTheRabbit(holes)).toEqual('');
});
