export function binarySearch(
    array: number[],
    target: number,
    left = 0,
    right = array.length
): number {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
        return middle;
    }

    if (target < array[middle]) {
        return binarySearch(array, target, left, middle - 1);
    }

    if (target > array[middle]) {
        return binarySearch(array, target, middle + 1, right);
    }

    return -1;
}
