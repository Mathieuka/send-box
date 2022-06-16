type SpecialArray = Array<number | SpecialArray>;

export function productSum(array: SpecialArray, multiplier = 1) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (typeof array[i] === 'number') {
            sum += array[i] as number;
        } else {
            sum += productSum(array[i] as SpecialArray, multiplier + 1);
        }
    }

    return multiplier * sum;
}
