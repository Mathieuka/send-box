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
    const currentY = Y0;
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
            const mid = Math.floor((currentX + width) / 2);
            currentX = mid;

            const bombIsAtTheEndOfTheLineJustToTheRight = mid + 1 === width;
            if (bombIsAtTheEndOfTheLineJustToTheRight) {
                currentX = mid + 1;
                consoleLog = `${currentX.toString()} ${currentY.toString()}`;
            } else {
                consoleLog = `${currentX.toString()} ${currentY.toString()}`;
            }
        }
    }
    return consoleLog;
};
