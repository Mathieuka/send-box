// IDEA: Apply a binary search to each new direction
export const shadowsOfTheKnight = (input: {
    width: number;
    height: number;
    maxJumps: number;
    X0: number;
    Y0: number;
    bombDir: string[];
    bombCoordinate: string;
}) => {
    const { width, height, maxJumps, X0, Y0, bombDir, bombCoordinate } = input;
    let jumpsCounter = 0;
    let consoleLog = '';
    let currentX = X0;
    let currentY = Y0;
    const bombIsInDepartPosition =
        `${X0.toString()} ${Y0.toString()}` === bombCoordinate;

    if (bombIsInDepartPosition) {
        consoleLog = `${X0.toString()} ${Y0.toString()}`;
        return consoleLog;
    }

    while (consoleLog !== bombCoordinate) {
        const direction = bombDir[jumpsCounter];
        jumpsCounter += 1;
        if (jumpsCounter > maxJumps) return 'You did too much jumping';

        if (direction === 'R') {
            currentX =
                currentX + 1 === width
                    ? width
                    : Math.floor((currentX + width) / 2);
            consoleLog = `${currentX.toString()} ${currentY.toString()}`;
        }

        if (direction === 'L') {
            currentX = currentX - 1 === 0 ? 0 : Math.floor(currentX / 2);
            consoleLog = `${currentX.toString()} ${currentY.toString()}`;
        }

        if (direction === 'U') {
            currentY = currentY === 1 ? 0 : Math.floor(currentY / 2);
            consoleLog = `${currentX.toString()} ${currentY.toString()}`;
        }
    }
    return consoleLog;
};
