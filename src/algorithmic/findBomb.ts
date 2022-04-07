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
    let end = null;
    // console.log('end', end);
    // console.log('start', start);
    let mid: number | null = null;

    if (direction[0] === 'R') {
        end = width + 1;
    } else if (direction[0] === 'L') {
        end = 0;
    }
    console.log('start', start);
    console.log('end', end);
    while (consoleLog !== bombPosition) {
        if (jumps > jumpThreshold) return 'Too much jumping';

        if (direction[index] === 'R' && end) {
            mid = Math.floor((start + end) / 2);
            console.log('R mid', mid);
            consoleLog = mid;
            if (direction[index + 1] === 'R') {
                start = mid;
            } else {
                end = mid - 1;
            }
        }

        if (direction[index] === 'L' && typeof end === 'number') {
            mid = Math.floor(start / 2);
            console.log('L mid', mid);
            consoleLog = mid;
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
