import { removeDuplicatesFromLinkedList } from '../removeDuplicateFromLinkedList';

describe('remove duplicate from linked list', () => {
    test('1 nodes', () => {
        expect(
            removeDuplicatesFromLinkedList({
                value: 1,
                next: { value: 1, next: null },
            })
        ).toEqual({ value: 1, next: null });
    });

    test('3 nodes', () => {
        expect(
            removeDuplicatesFromLinkedList({
                value: 1,
                next: {
                    value: 1,
                    next: { value: 1, next: { value: 2, next: null } },
                },
            })
        ).toEqual({ value: 1, next: { value: 2, next: null } });
        // ).toEqual(null);
    });
});
