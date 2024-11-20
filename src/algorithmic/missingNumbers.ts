export function missingNumbers(nums: number[]) {
    const n = nums.length + 2;
    const completeNums = Array.from({ length: n }, (_, index) => index + 1);

    return completeNums.filter((num) => !nums.includes(num));
}
