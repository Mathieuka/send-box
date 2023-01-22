export function spiralTraverse(array: number[][]) {
    const result: number[] = [];

    const columnStartIdx = 0;
    let rowStartIdx = 0;

    let columnEndIdx = array[0].length;
    let rowEndIdx = array.length - 1;

    for (let i = columnStartIdx; i < columnEndIdx; i += 1) {
        result.push(array[rowStartIdx][i]);
    }

    rowStartIdx += 1;

    for (let i = rowStartIdx; i <= rowEndIdx; i += 1) {
        result.push(array[i][columnEndIdx - 1]);
    }

    columnEndIdx -= 1;

    for (let i = columnEndIdx - 1; i >= columnStartIdx; i -= 1) {
        result.push(array[rowEndIdx][i]);
    }

    rowEndIdx -= 1;

    for (let i = rowEndIdx; i >= rowStartIdx; i -= 1) {
        result.push(array[i][columnStartIdx]);
    }

    return result;
}
