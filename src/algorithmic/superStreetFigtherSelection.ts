type FighterGrid = Array<string[]>;
type Position = [number, number];

export function superStreetFighterSelection(
    fighters: FighterGrid,
    position: Position,
    moves: string[]
): string[] {
    const colLength = fighters[0].length;
    const rowLength = fighters.length;

    const move = (currentPosition: Position, direction: string): Position => {
        let [currentRow, currentColumn] = currentPosition;

        switch (direction) {
            case 'right':
                do {
                    currentColumn = (currentColumn + 1) % colLength;
                } while (fighters[currentRow][currentColumn] === '');
                break;
            case 'left':
                do {
                    currentColumn = (currentColumn - 1 + colLength) % colLength;
                } while (fighters[currentRow][currentColumn] === '');
                break;
            case 'up':
                if (
                    currentRow > 0 &&
                    fighters[currentRow - 1][currentColumn] !== ''
                ) {
                    currentRow -= 1;
                }
                break;
            case 'down':
                if (
                    currentRow < rowLength - 1 &&
                    fighters[currentRow + 1][currentColumn] !== ''
                ) {
                    currentRow += 1;
                }
                break;
        }

        return [currentRow, currentColumn];
    };

    const processMove = (
        acc: { currentPosition: Position; result: string[] },
        direction: string
    ) => {
        const nextPosition = move(acc.currentPosition, direction);
        const [finalRow, finalColumn] = nextPosition;
        return {
            currentPosition: nextPosition,
            result: [...acc.result, fighters[finalRow][finalColumn]],
        };
    };

    const initialState = { currentPosition: position, result: [] as string[] };

    const { result } = moves.reduce(processMove, initialState);

    return result;
}
