export function nonConstructibleChange(coins: number[]) {
    const coinsSortedAsc = [...coins].sort((a, b) => a - b);
    let currMinImpossibleChange = 0;

    for (let i = 0; i < coinsSortedAsc.length; i += 1) {
        if (currMinImpossibleChange + 1 < coinsSortedAsc[i]) {
            return currMinImpossibleChange + 1;
        }
        currMinImpossibleChange += coinsSortedAsc[i];
    }

    return currMinImpossibleChange + 1;
}
