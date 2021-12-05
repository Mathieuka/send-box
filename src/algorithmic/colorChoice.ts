const buildMatrix = (posters: number, colorsAvailable: number) => {
    let matrix: number[][] = [
        [1, ...(Array.from({ length: colorsAvailable }).fill(0) as number[])],
    ];

    for (let idx = 1; idx < posters; idx += 1) {
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
    // let result = null;
    const matrix = buildMatrix(posters, colorsAvailable);
    matrix.forEach((vector, matrixIdx) => {
        for (let vectorIdx = 0; vectorIdx < vector.length; vectorIdx += 1) {
            if (matrixIdx !== 0 && vectorIdx <= matrixIdx) {
                if (vector[vectorIdx] === 0) {
                    matrix[matrixIdx][vectorIdx] =
                        matrix[matrixIdx - 1][vectorIdx] +
                        matrix[matrixIdx - 1][vectorIdx - 1];
                    // if (matrix[matrixIdx][vectorIdx] === posters) {
                    //     result = vectorIdx
                    // }
                }
            }
        }
    });
    console.log('[matrix] ', matrix);
    return matrix;
};
// Je checkout au vecteur precedent
// J'additionne l'index courant + l'index precedent
// update la l'index courant avec la somme
