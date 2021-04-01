export function streetFighterSelection(
    fighters: Array<string[]>,
    position: number[],
    moves: string[]
) {
    let result: string[] = [];
    let currentHorizontal = position[0];
    let currentVertical = position[1];
    moves.forEach((move) => {
        if (move === 'up') {
            if (currentVertical === 1) {
                currentVertical = 0;
            }
        }

        if (move === 'down') {
            if (currentVertical === 0) {
                currentVertical = 1;
            }
        }

        if (move === 'right') {
            currentHorizontal += 1;
        }

        if (move === 'left') {
            currentHorizontal -= 1;
        }

        if (currentHorizontal > 5) {
            currentHorizontal -= 6;
        }

        if (currentHorizontal < 0) {
            currentHorizontal += 6;
        }
        result = [...result, fighters[currentVertical][currentHorizontal]];
    });

    return result;
}
