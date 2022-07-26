export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
    const result: number[] = [];
    let min = Infinity;

    for (let i = 0; i < arrayOne.length; i += 1) {
        for (let j = 0; j < arrayTwo.length; j += 1) {
            if (arrayOne[i] - arrayTwo[j] === 0)
                return [arrayOne[i], arrayTwo[j]];

            if (arrayTwo[j] - arrayOne[i] === 0)
                return [arrayTwo[j], arrayOne[i]];

            if (Math.abs(arrayOne[i] - arrayTwo[j]) < min) {
                min = Math.abs(arrayOne[i] - arrayTwo[j]);
                result[0] = arrayOne[i];
                result[1] = arrayTwo[j];
            } else if (Math.abs(arrayTwo[j] - arrayOne[i]) < min) {
                min = Math.abs(arrayTwo[j] - arrayOne[i]);
                result[0] = arrayTwo[j];
                result[1] = arrayOne[i];
            }
        }
    }
    return result;
}
