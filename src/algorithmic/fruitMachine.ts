const scoreTable = {
    Jack: 1,
    Queen: 2,
    King: 3,
    Bar: 4,
    Cherry: 5,
    Seven: 6,
    Shell: 7,
    Bell: 8,
    Star: 9,
    Wild: 10,
};
interface FruitsQty {
    [key: string]: number;
}

export const getFruitsOccurrences = (reels: string[][], spins: number[]) => {
    const reelsFruitsResult: string[] = [
        reels[0][spins[0]],
        reels[1][spins[1]],
        reels[2][spins[2]],
    ];
    const fruitsQty: FruitsQty = {};

    reelsFruitsResult.forEach((fruit) => {
        if (!fruitsQty[fruit]) {
            fruitsQty[fruit] = 1;
        } else {
            fruitsQty[fruit] += 1;
        }
    });

    for (const fruit in fruitsQty) {
        if (fruitsQty[fruit] < 2) {
            delete fruitsQty[fruit];
        }
    }

    return fruitsQty;
};

export const fruit = (reels: string[][], spins: number[]): number => {
    const fruitsOccurrences = getFruitsOccurrences(reels, spins);
    console.log('[fruitsOccurrences] ', fruitsOccurrences);

    return 0;
};
