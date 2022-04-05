const createBuilding = (width: number, height: number) => {
    const building = [];
    const row = [...Array(width)];
    for (let i = 0; i < height; i += 1) {
        building.push([...row]);
    }

    return building;
};

export const shadowsOfTheKnight = (input: {
    width: number;
    height: number;
    maxJumps: number;
    X0: number;
    Y0: number;
    bombDir: string;
    bombCoordinate: string;
}) => {
    const { width, height, maxJumps, X0, Y0, bombDir, bombCoordinate } = input;
    const building = createBuilding(width, height);
    let jumpsCounter = 0;
    let consoleLog = '';
    const bombIsInDepartPosition =
        `${X0.toString()} ${Y0.toString()}` === bombCoordinate;

    if (bombIsInDepartPosition) {
        consoleLog = `${X0.toString()} ${Y0.toString()}`;
        return consoleLog;
    }

    while (consoleLog !== bombCoordinate) {
        jumpsCounter += 1;
        if (jumpsCounter > maxJumps) return 'You did too much jumping';
    }
    return consoleLog;
};
