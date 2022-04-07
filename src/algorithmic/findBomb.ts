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
    let start = initialPosition;
    const end = width + 1;

    while (consoleLog !== bombPosition) {
        if (jumps > jumpThreshold) return 'Too much jumping';
        if (direction[index] === 'R') {
            const mid = Math.floor((start + end) / 2);
            start = mid;
            consoleLog = mid;
        }

        jumps += 1;
        index += 1;
    }

    return consoleLog;
};
