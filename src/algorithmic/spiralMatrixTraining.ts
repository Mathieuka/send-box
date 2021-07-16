export const spiralMatrixTraining = (n: number) => {
    const arr: any = [];
    for (let i = 0; i < n; i += 1) {
        arr.push([]);
    }

    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let counter = 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        // top row
        for (let i = startColumn; i <= endColumn; i += 1) {
            arr[startRow][i] = counter;
            counter += 1;
        }
        startRow += 1;

        // right column
        for (let i = startRow; i <= endRow; i += 1) {
            arr[i][endColumn] = counter;
            counter += 1;
        }
        endColumn -= 1;

        // bottom row
        for (let i = endColumn; i >= startColumn; i -= 1) {
            arr[endRow][i] = counter;
            counter += 1;
        }
        endRow -= 1;

        // left column
        for (let i = endRow; i >= startRow; i -= 1) {
            arr[i][startColumn] = counter;
            counter += 1;
        }
        startColumn += 1;
    }

    return arr;
};
