const buildMatrix = (posters: number, colorsAvailable: number) => {
    let matrix: number[][] = [
        [1, ...(Array.from({ length: colorsAvailable }).fill(0) as number[])],
    ];
    for (let idx = 1; idx <= colorsAvailable; idx += 1) {
        matrix = [
            ...matrix,
            [
                1,
                ...(Array.from({ length: colorsAvailable }).fill(
                    0
                ) as number[]),
            ],
        ];
    }
    return matrix;
};

export const checkChoose = (posters: number, colorsAvailable: number): any => {
    if (posters === colorsAvailable) return 1;
    const matrix = buildMatrix(posters, colorsAvailable);
    for (let matrixIdx = 0; matrixIdx < matrix.length; matrixIdx += 1) {
        for (
            let vectorIdx = 0;
            vectorIdx < matrix[matrixIdx].length;
            vectorIdx += 1
        ) {
            if (matrixIdx !== 0 && vectorIdx <= matrixIdx) {
                if (matrix[matrixIdx][vectorIdx] === 0) {
                    matrix[matrixIdx][vectorIdx] =
                        matrix[matrixIdx - 1][vectorIdx] +
                        matrix[matrixIdx - 1][vectorIdx - 1];
                    if (
                        matrixIdx <= colorsAvailable &&
                        matrix[matrixIdx][vectorIdx] === posters
                    ) {
                        return vectorIdx;
                    }
                }
            }
        }
    }
    return -1;
};
