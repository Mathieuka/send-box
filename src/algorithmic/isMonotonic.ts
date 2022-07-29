export function isMonotonic(array: number[]) {
    let result = true;

    const isNotMonotonic =
        array[0] > array[array.length - 1]
            ? (idx: number) => array[idx] < array[idx + 1]
            : (idx: number) => array[idx] > array[idx + 1];

    for (let i = 0; i < array.length; i += 1) {
        if (isNotMonotonic(i)) {
            result = false;
        }
    }

    return result;
}
