export function tournamentWinner(competitions: string[][], results: number[]) {
    const scores: { [key: string]: number } = {};
    let resultsIdx = 0;
    let bestScore: null | string = null;

    for (const competition of competitions) {
        const winner = competition.reverse()[results[resultsIdx]];

        if (!scores[winner]) {
            scores[winner] = 3;
        } else {
            scores[winner] += 3;
        }

        if (!bestScore) {
            bestScore = winner;
        } else if (scores[winner] > scores[bestScore]) {
            bestScore = winner;
        }

        resultsIdx += 1;
    }

    return bestScore;
}

// 2 teams
// 1 winner
// Winner = 3 points ; loser = 0 points
// 1 team = home team; Second team = away team

// teams that have competed (competitions) [homeTeam, awayTeam]
// (results)Array

// results[i] denotes the winner of competition[i]
// where a 1 === homeTeam win ; 0 === awayTeam win
