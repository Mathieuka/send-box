export function tournamentWinner(competitions: string[][], results: number[]) {
    const { currentBestTeam } = competitions.reduce(
        (
            acc: { [key: string]: any; currentBestTeam: string | null },
            competition,
            idx
        ) => {
            const homeTeamIsWin = results[idx] === 1;
            const [homeTeam, awayTeam] = competition;
            const winner = homeTeamIsWin ? homeTeam : awayTeam;

            if (!acc[winner]) {
                acc[winner] = 3;
            } else {
                acc[winner] += 3;
            }

            if (!acc.currentBestTeam) {
                acc.currentBestTeam = winner;
            } else if (acc[winner] > acc[acc.currentBestTeam]) {
                acc.currentBestTeam = winner;
            }

            return acc;
        },
        { currentBestTeam: null }
    );

    return currentBestTeam;
}
