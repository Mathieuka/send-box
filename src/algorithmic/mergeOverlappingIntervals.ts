export function mergeOverlappingIntervals(array: number[][]) {
    const values = [...array];
    if (!array.length) {
        return [];
    }

    for (let i = 0; i < array.length; i += 1) {
        const secondNumber = array[i][1];
        const nextFirstNumber = array[i + 1] && array[i + 1][0];

        if (secondNumber && nextFirstNumber) {
            if (nextFirstNumber <= secondNumber) {
                [values[i][1]] = [values[i + 1][1]];
                values.splice(i + 1, 1);
            }
        }
    }

    return values;
}
