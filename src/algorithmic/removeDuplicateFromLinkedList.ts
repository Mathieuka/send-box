// This is an input class. Do not edit.
export class LinkedList {
    value: number;

    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    let currLinkedList: LinkedList | null = linkedList;
    let pointer: LinkedList | null = linkedList.next;

    while (pointer !== null) {
        if (currLinkedList?.next && currLinkedList?.value === pointer?.value) {
            currLinkedList = pointer.next;
            pointer = pointer?.next?.next ?? null;
        } else {
            console.log(
                '%c LOG to',
                'background: #222; color: #bada55',
                currLinkedList?.next?.next
            );
            pointer = currLinkedList?.next ?? null;
        }
    }

    return currLinkedList;
}
