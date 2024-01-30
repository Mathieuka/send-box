// This is an input class. Do not edit.
export class LinkedList {
    value: number;

    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function middleNode(linkedList: LinkedList) {
    let slowNode: LinkedList | null = linkedList;
    let fastNode: LinkedList | null = linkedList;

    while (fastNode !== null) {
        slowNode = slowNode?.next ?? null;
        fastNode = slowNode?.next?.next ?? null;
    }

    return slowNode;
}
