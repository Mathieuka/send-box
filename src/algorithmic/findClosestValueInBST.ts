export interface Node {
    id: string;
    left: string | null;
    right: string | null;
    value: number;
}

export const nodes: Node[] = [
    { id: '10', left: '5', right: '15', value: 10 },
    { id: '5', left: '2', right: '5', value: 5 },
    { id: '15', left: '13', right: '22', value: 15 },
    { id: '22', left: null, right: null, value: 22 },
    { id: '13', left: null, right: '14', value: 13 },
    { id: '14', left: null, right: null, value: 14 },
    { id: '5', left: null, right: null, value: 5 },
    { id: '2', left: '1', right: null, value: 2 },
    { id: '1', left: null, right: null, value: 1 },
];

export class BST {
    value: number;

    left: BST | null;

    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findClosestValueInBstHelper(
    tree: BST | null,
    target: number,
    closest: number
): number {
    if (tree === null) {
        return closest;
    }
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        // eslint-disable-next-line no-param-reassign
        closest = tree.value;
    }
    if (target < tree.value) {
        const currNode =
            nodes.find((node) => node.value === tree.value) || null;
        const left = nodes.find((node) => currNode?.left === node.id) || null;
        if (left) {
            return findClosestValueInBstHelper(
                new BST(left.value),
                target,
                closest
            );
        }
    }
    if (target > tree.value) {
        const currNode =
            nodes.find((node) => node.value === tree.value) || null;
        const right = nodes.find((node) => currNode?.right === node.id) || null;
        if (right) {
            return findClosestValueInBstHelper(
                new BST(right.value),
                target,
                closest
            );
        }
    }
    return closest;
}

export function findClosestValueInBst(tree: BST, target: number) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}
