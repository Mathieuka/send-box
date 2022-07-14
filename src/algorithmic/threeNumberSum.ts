type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
    let firstIdx = 0;
    let secondIdx = firstIdx + 1;
    let thirdIdx = secondIdx + 1;
    const result: Triplet[] = [];

    array.sort((a, b) => a - b);

    while (
        firstIdx !== array.length - 2 &&
        secondIdx !== array.length - 1 &&
        thirdIdx !== array.length
    ) {
        const thirdIdxIsInTheEndOfTheArray = thirdIdx === array.length - 1;
        const secondIdxIsInSecondLastPositionOfTheArray =
            secondIdx === array.length - 2;
        const secondAndThirdIdxIsInTheEndOfTheArray =
            secondIdxIsInSecondLastPositionOfTheArray &&
            thirdIdxIsInTheEndOfTheArray;
        const addEqualTheTarget =
            array[firstIdx] + array[secondIdx] + array[thirdIdx] === targetSum;

        if (addEqualTheTarget) {
            result.push([array[firstIdx], array[secondIdx], array[thirdIdx]]);
        }

        if (secondAndThirdIdxIsInTheEndOfTheArray) {
            firstIdx += 1;
            secondIdx = firstIdx + 1;
            thirdIdx = secondIdx + 1;
        } else if (
            thirdIdxIsInTheEndOfTheArray &&
            !secondIdxIsInSecondLastPositionOfTheArray
        ) {
            secondIdx += 1;
            thirdIdx = secondIdx + 1;
        } else {
            thirdIdx += 1;
        }
    }

    return result;
}
