export const findBomb = ({
    width,
    X0,
    Y0,
    jumpThreshold,
    direction,
    bombPosition,
}: {
    width: number;
    height: number;
    X0: number;
    Y0: number;
    jumpThreshold: number;
    direction: string[];
    bombPosition: string;
}) => {
    let consoleLog: null | string = null;
    let index = 0;
    let jumps = 0;
    let start = X0;
    let end = null;
    let mid: number | null = null;

    if (direction[0] === 'R') {
        end = width + 1;
    } else if (direction[0] === 'L') {
        end = 0;
    }

    while (consoleLog !== bombPosition) {
        if (jumps > jumpThreshold) return 'Too much jumping';

        if (direction[index] === 'R' && end) {
            mid = Math.floor((start + end) / 2);
            consoleLog = `${mid} 0`;
            if (direction[index + 1] === 'R') {
                start = mid;
            } else {
                end = start;
                start = mid;
            }
        }

        if (direction[index] === 'L' && typeof end === 'number') {
            mid = Math.floor((start + end) / 2);
            consoleLog = `${mid} 0`;
            if (direction[index + 1] === 'L') {
                start = mid;
            } else {
                end = mid;
            }
        }

        jumps += 1;
        index += 1;
    }

    return consoleLog;
};
