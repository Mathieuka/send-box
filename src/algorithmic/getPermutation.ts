export const getPermutations = (array: number[]): number[][] => {
    const result: number[][] = [];
    if (array.length < 2) {
        return [array];
    }

    array.forEach((element) => {
        const remainingElements = array.filter((value) => value !== element);

        const permutationOfRemainder = getPermutations(remainingElements);

        permutationOfRemainder?.forEach((permutation) => {
            result.push([element, ...permutation]);
        });
    });

    return result;
};
