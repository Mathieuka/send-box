export function spiralTraverse(array: number[][]) {
    const result: number[] = [];
    let columnStartIdx = 0;
    let rowStartIdx = 0;
    let columnEndIdx = array[0].length;
    let rowEndIdx = array.length - 1;

    while (columnStartIdx < columnEndIdx) {
        if (rowStartIdx <= rowEndIdx) {
            // row in
            for (let i = columnStartIdx; i < columnEndIdx; i += 1) {
                result.push(array[rowStartIdx][i]);
            }
            rowStartIdx += 1;
        }

        if (columnEndIdx > columnStartIdx) {
            // column in
            for (let i = rowStartIdx; i <= rowEndIdx; i += 1) {
                result.push(array[i][columnEndIdx - 1]);
            }
            columnEndIdx -= 1;
        }

        if (rowStartIdx <= rowEndIdx) {
            // row out
            for (let i = columnEndIdx - 1; i >= columnStartIdx; i -= 1) {
                result.push(array[rowEndIdx][i]);
            }
            rowEndIdx -= 1;
        }

        if (columnStartIdx < columnEndIdx) {
            // column out
            for (let i = rowEndIdx; i >= rowStartIdx; i -= 1) {
                result.push(array[i][columnStartIdx]);
            }
            columnStartIdx += 1;
        }
    }

    return result;
}
