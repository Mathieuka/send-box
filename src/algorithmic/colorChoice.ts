const buildMatrix = (posters: number, colorsAvailable: number) => {
    let matrix: number[][] = [];
    for (let idx = 0; idx <= colorsAvailable; idx += 1) {
        matrix = [
            ...(matrix.length ? matrix : ([] as number[][])),
            [1, ...Array.from({ length: colorsAvailable }).fill(0)] as number[],
        ];
    }
    return matrix as number[][];
};

export const checkChoose = (posters: number, colorsAvailable: number): any => {
    if (posters === colorsAvailable) return 1;
    const matrix = buildMatrix(posters, colorsAvailable);
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
        for (
            let columnIdx = 0;
            columnIdx < matrix[rowIdx].length;
            columnIdx += 1
        ) {
            if (rowIdx && columnIdx <= rowIdx) {
                if (!matrix[rowIdx][columnIdx]) {
                    const previousRaw = matrix[rowIdx - 1];
                    const currentRaw = matrix[rowIdx];
                    currentRaw[columnIdx] =
                        previousRaw[columnIdx] + previousRaw[columnIdx - 1];
                    if (matrix[rowIdx][columnIdx] === posters) {
                        return columnIdx;
                    }
                }
            }
        }
    }
    return -1;
};
