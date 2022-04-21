export const findBomb = ({
    width,
    height,
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
    let startX = X0;
    let endX = null;
    let startY = Y0;
    let endY = null;
    let midX: number | null = null;
    let midY: number | null = null;

    if (direction[0] === 'R' || direction[0] === 'DR') {
        endX = width + 1;
        endY = height + 1;
    } else if (direction[0] === 'L' || direction[0] === 'DL') {
        endX = 0;
        endY = height;
    }

    while (consoleLog !== bombPosition) {
        if (jumps > jumpThreshold) return `Too much jumping => ${consoleLog}`;

        if (
            direction[index] === 'R' &&
            typeof endX === 'number' &&
            typeof endY === 'number'
        ) {
            midX = Math.floor((startX + endX) / 2);
            midY = Math.floor((startY + endY) / 2);
            console.log('R consoleLog => ', `${midX} ${midY}`);
            consoleLog = `${midX} ${midY}`;
            if (direction[index + 1] === 'R') {
                startX = midX;
            } else {
                endX = startX;
                startX = midX;
            }
        }

        if (
            direction[index] === 'L' &&
            typeof endX === 'number' &&
            typeof endY === 'number'
        ) {
            midX = Math.floor((startX + endX) / 2);
            midY = Math.floor((startY + endY) / 2);
            consoleLog = `${midX} ${midY}`;
            if (direction[index + 1] === 'L') {
                startX = midX;
            } else {
                endX = midX;
            }
        }

        if (
            direction[index] === 'DR' &&
            typeof endX === 'number' &&
            typeof endY === 'number'
        ) {
            midX = Math.floor((startX + endX) / 2);
            midY = Math.floor((startY + endY) / 2);
            console.log('DR consoleLog => ', `${midX} ${midY}`);
            consoleLog = `${midX} ${midY}`;
            if (direction[index + 1] === 'DR' || direction[index + 1] === 'R') {
                startX = midX;
                startY = midY;
            }
        }

        if (
            direction[index] === 'DL' &&
            typeof endX === 'number' &&
            typeof endY === 'number'
        ) {
            midX = Math.floor((startX + endX) / 2);
            midY = Math.floor((startY + endY) / 2);
            console.log('DL consoleLog => ', `${midX} ${midY}`);
            consoleLog = `${midX} ${midY}`;
            if (direction[index + 1] === 'DL' || direction[index + 1] === 'L') {
                startX = midX;
                startY = midY;
            }
        }

        jumps += 1;
        index += 1;
    }

    return consoleLog;
};
