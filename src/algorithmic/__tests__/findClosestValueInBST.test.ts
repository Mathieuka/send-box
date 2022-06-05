import { findClosestValueInBst, nodes, BST } from '../findClosestValueInBST';

test('Return the closest value in BST', () => {
    // expect(findClosestValueInBst(new BST(10), 23)).toEqual(22);
    expect(findClosestValueInBst(new BST(10), 3)).toEqual(2);
});
