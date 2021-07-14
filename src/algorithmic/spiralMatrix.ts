export const spiralMatrix = (n: number): any => {
    const result: any = [];
    for (let idx = 0; idx < n; idx += 1) {
        result.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // top row
        for (let i = startColumn; i <= endColumn; i += 1) {
            result[startRow][i] = counter;
            counter += 1;
        }
        startRow += 1;

        // right column
        for (let i = startRow; i <= endRow; i += 1) {
            result[i][endColumn] = counter;
            counter += 1;
        }
        endColumn -= 1;

        // bottom row
        for (let i = endColumn; i >= startColumn; i -= 1) {
            result[endRow][i] = counter;
            counter += 1;
        }
        endRow -= 1;

        // start column
        for (let i = endRow; i >= startRow; i -= 1) {
            result[i][startColumn] = counter;
            counter += 1;
        }
        startColumn += 1;
    }
    return result;
};
