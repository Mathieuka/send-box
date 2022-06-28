export function selectionSort(array: number[]) {
    const arr = [...array];

    for (let currValIdx = 0; currValIdx < arr.length; currValIdx += 1) {
        let minVal = currValIdx;
        for (let i = currValIdx + 1; i < arr.length; i += 1) {
            if (arr[i] < arr[minVal]) {
                minVal = i;
            }
        }

        if (minVal !== currValIdx) {
            [arr[currValIdx], arr[minVal]] = [arr[minVal], arr[currValIdx]];
        }
    }

    return arr;
}
