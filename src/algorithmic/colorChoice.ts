const buildMatrix = (posters: number, colorsAvailable: number) => {
    let matrix = [[1, ...Array.from({ length: colorsAvailable }).fill(0)]];

    for (let idx = 1; idx < posters; idx += 1) {
        matrix = [
            ...matrix,
            [1, ...Array.from({ length: colorsAvailable }).fill(0)],
        ];
    }
    return matrix;
};

export const checkChoose = (posters: number, colorsAvailable: number): any => {
    const matrix = buildMatrix(posters, colorsAvailable);
    return matrix;
};
