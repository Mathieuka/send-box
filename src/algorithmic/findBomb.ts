export const findBomb = ({
    width,
    initialPosition,
    jumpThreshold,
    direction,
    bombPosition,
}: {
    width: number;
    initialPosition: number;
    jumpThreshold: number;
    direction: string[];
    bombPosition: number;
}) => {
    let consoleLog: null | number = null;
    let index = 0;
    let jumps = 0;
    let start = 0;
    const end = width + 1;
    let mid: number | null = null;

    while (consoleLog !== bombPosition) {
        if (jumps > jumpThreshold) return 'Too much jumping';

        if (direction[index] === 'R') {
            mid = Math.floor((start + end) / 2);
            start = mid;
            consoleLog = mid;
        }

        if (direction[index] === 'L') {
            mid = Math.floor((end - start) / 2);
            start = mid;
            consoleLog = mid;
        }

        jumps += 1;
        index += 1;
    }

    return consoleLog;
};
