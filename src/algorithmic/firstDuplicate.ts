export function firstDuplicateValue(array: number[]) {
    if (array.length === 2) {
        if (array[0] === array[1]) {
            return array[0];
        }
    }

    return -1;
}
