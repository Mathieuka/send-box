const sort = (results: number[]) => results.sort((a, b) => b - a);

export function sweetAndSavory(dishes: number[], target: number): number[] {
    const clonedDishes: number[] = JSON.parse(JSON.stringify(dishes));
    const positiveNums = sort(clonedDishes.filter((num) => num > 0));
    const negativeNums = sort(clonedDishes.filter((num) => num <= 0));
    let currentGap = Infinity;
    let currentResult = [0, 0];

    for (let i = 0; i < positiveNums.length; i += 1) {
        const currentPositiveNum = positiveNums[i];

        for (let j = 0; j < negativeNums.length; j += 1) {
            const currentNegativeNum = negativeNums[j];
            const sum = currentPositiveNum + currentNegativeNum;
            const gap = Math.abs(target - sum);

            if (sum <= target && gap >= 0 && gap < currentGap) {
                currentGap = gap;
                currentResult = [currentNegativeNum, currentPositiveNum];
            }
        }
    }

    return currentResult;
}
