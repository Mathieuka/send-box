export function insertionSort(array: number[]) {
    let currentIdx = 1;
    const arr = [...array];

    for (let i = 0; i < arr.length - 1; i += 1) {
        for (let j = 0; j < currentIdx; j += 1) {
            if (arr[currentIdx] < arr[j]) {
                const memo = arr[currentIdx];
                arr[currentIdx] = arr[j];
                arr[j] = memo;
            }
        }
        currentIdx += 1;
    }

    return arr;
}
