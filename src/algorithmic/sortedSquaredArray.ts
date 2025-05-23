export function sortedSquaredArray(array: number[]) {
    return array.map((num) => num * num).sort((a, b) => a - b);
}
