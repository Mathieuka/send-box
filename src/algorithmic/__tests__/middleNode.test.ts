import { middleNode } from '../middleNode';

describe('Linkedlist', () => {
    test('3 nodes', () => {
        expect(
            middleNode({
                value: 5,
                next: { value: 7, next: { value: 9, next: null } },
            })
        ).toEqual({ next: { next: null, value: 9 }, value: 7 });
    });
});
