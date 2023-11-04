export function mergeOverlappingIntervals(
    array: number[][],
    currentIndex = 0
): any {
    const values = JSON.parse(
        JSON.stringify(array.sort((a, b) => a[0] - b[0]))
    );

    if (values.length === currentIndex) {
        return values;
    }

    const secondNumber = array[currentIndex] && array[currentIndex][1];
    const nextFirstNumber =
        array[currentIndex + 1] && array[currentIndex + 1][0];
    const nextSecondNumber =
        array[currentIndex + 1] && array[currentIndex + 1][1];

    if (Number.isInteger(secondNumber) && Number.isInteger(nextFirstNumber)) {
        if (secondNumber > nextFirstNumber && secondNumber > nextSecondNumber) {
            values.splice(currentIndex + 1, 1);
            return mergeOverlappingIntervals(values, currentIndex);
        }

        if (secondNumber >= nextFirstNumber) {
            [values[currentIndex][1]] = [values[currentIndex + 1][1]];
            values.splice(currentIndex + 1, 1);

            return mergeOverlappingIntervals(values, currentIndex);
        }
        return mergeOverlappingIntervals(values, currentIndex + 1);
    }

    return values;
}
