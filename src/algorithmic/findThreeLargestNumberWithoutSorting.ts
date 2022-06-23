export function findThreeLargestNumbers(array: number[]) {
    const threeMaxValues = [];
    const arrayClone = [...array];
    for (let i = 0; i < 3; i += 1) {
        const maxValue = Math.max(...arrayClone);
        const maxValueIdx = array.findIndex((value) => value === maxValue);
        arrayClone[maxValueIdx] = -Infinity;
        threeMaxValues.unshift(maxValue);
    }
    return threeMaxValues;
}
