export function minimumWaitingTime(queries: number[]) {
    queries.sort((a, b) => a - b);
    let totalWaitingTime = 0;
    for (let idx = 0; idx < queries.length; idx += 1) {
        const duration = queries[idx];
        const queriesLeft = queries.length - (idx + 1);
        totalWaitingTime += duration * queriesLeft;
        console.log('-----------------------------');
    }
    return totalWaitingTime;
}

// Solution 2
// export function minimumWaitingTime(queries: number[]) {
//     let result = 0;
//     for (let i = 0; i < queries.length - 1; i += 1) {
//         result += queries
//             .slice()
//             .sort((a, b) => a - b)
//             .slice(0, i + 1)
//             .reduce((a, b) => a + b, 0);
//     }
//     return result;
// }
