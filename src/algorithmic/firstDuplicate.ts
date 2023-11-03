export function firstDuplicateValue(array: number[]) {
    const numToIndex: Record<number, number> = {};

    for (const [index, value] of array.entries()) {
        if (numToIndex[value]) {
            return value;
        }
        numToIndex[value] = index;
    }
    return -1;
}
