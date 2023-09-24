export const buildFactorsArrays = (numbers: number[]) => {
    let idx = 0;

    const arraysOfFactors: number[][] = [];
    for (let i = 0; i < numbers.length; i += 1) {
        const arrayToMultiply = [...numbers];
        arrayToMultiply.splice(idx, 1);
        idx += 1;

        arraysOfFactors.push(arrayToMultiply);
    }

    return arraysOfFactors;
};

type Accumulator = number[][] | number[];

export function arrayOfProducts(numbers: number[]) {
    if (numbers.length < 3) {
        return numbers;
    }

    const arraysOfFactors = buildFactorsArrays(numbers);

    return arraysOfFactors.reduce((acc, curr, index) => {
        let result: undefined | number;

        curr.forEach((num, index) => {
            if (curr[index + 1] !== undefined) {
                if (result !== undefined) {
                    result *= curr[index + 1];
                }
                if (result === undefined) {
                    result = 0;
                    result += num * curr[index + 1];
                }
            }
        });

        const copy: number[] = JSON.parse(JSON.stringify(acc));
        if (typeof result === 'number') {
            copy[index] = result;
        }

        return copy;
    }, arraysOfFactors as Accumulator);
}
