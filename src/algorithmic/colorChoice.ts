export const checkChoose = (posters: number, colorsAvailable: number): any => {
    let matrix = [[1, ...Array.from({ length: colorsAvailable }).fill(0)]];

    for (let idx = 1; idx < posters; idx += 1) {
        matrix = [
            ...matrix,
            Array.from({ length: colorsAvailable + 1 }).fill(0),
        ];
    }
    console.log('[matrix] ', matrix);
    return matrix;
};
