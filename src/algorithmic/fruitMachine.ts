interface ScoreTable {
    [keys: string]: number;
}

interface FruitsQty {
    [key: string]: number;
}

const scoreTable: ScoreTable = {
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

export const getFruitsWithQuantity = (reels: string[][], spins: number[]) => {
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
        if (fruit !== 'Wild' && fruitsQty[fruit] < 2) {
            delete fruitsQty[fruit];
        }
    }

    return fruitsQty;
};

export const fruit = (reels: string[][], spins: number[]): number => {
    const fruitsWithQuantity = getFruitsWithQuantity(reels, spins);
    let doubleTheScoreBy2 = false;
    let score = 0;
    for (const fruit in fruitsWithQuantity) {
        const twoFruits = fruitsWithQuantity[fruit] === 2;
        const threeFruits = fruitsWithQuantity[fruit] === 3;
        if (fruit === 'Wild' && fruitsWithQuantity[fruit] === 1) {
            doubleTheScoreBy2 = true;
        }
        if (twoFruits) {
            score = scoreTable[fruit];
        }
        if (threeFruits) {
            score = scoreTable[fruit] * 10;
        }
    }
    return doubleTheScoreBy2 ? score * 2 : score;
};
