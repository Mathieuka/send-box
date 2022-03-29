// www.codewars.com/kata/58583922c1d5b415b00000ff/train/typescript

export function superStreetFighterSelection(
    fighters: Array<string[]>,
    position: number[],
    moves: string[]
): string[] {
    const result: string[] = [];
    const colLength = fighters[0].length - 1;
    const rowLength = fighters.length - 1;
    let currentRow: number = position[0];
    let currentColumn: number = position[1];

    const escapeTheSlotWhileIsEmpty = (direction: string) => {
        while (fighters[currentRow][currentColumn] === '') {
            currentColumn =
                direction === 'right' ? currentColumn + 1 : currentColumn - 1;
        }
    };

    moves.forEach((direction: string) => {
        const nextCaseIsOutsideTheFrame =
            direction === 'right'
                ? currentColumn + 1 > colLength
                : currentColumn - 1 < 0;
        const nextSlotIsEmpty =
            direction === 'right'
                ? fighters[currentRow][currentColumn + 1] === ''
                : fighters[currentRow][currentColumn - 1] === '';
        const canGoUp =
            direction === 'up' &&
            currentRow > 0 &&
            fighters[currentRow - 1][currentColumn] !== '';
        const canGoDown =
            direction === 'down' &&
            currentRow < rowLength &&
            fighters[currentRow + 1][currentColumn] !== '';

        if (direction === 'right' || direction === 'left') {
            if (nextSlotIsEmpty || nextCaseIsOutsideTheFrame) {
                if (direction === 'right') {
                    if (currentColumn + 1 >= colLength) {
                        currentColumn = 0;
                    } else {
                        currentColumn += 1;
                    }
                }

                if (direction === 'left') {
                    if (currentColumn - 1 <= 0) {
                        currentColumn = colLength;
                    } else {
                        currentColumn -= 1;
                    }
                }
                escapeTheSlotWhileIsEmpty(direction);
            } else {
                currentColumn += direction === 'right' ? +1 : -1;
            }
        }

        if (direction === 'up' || direction === 'down') {
            if (canGoUp) {
                currentRow -= 1;
            }
            if (canGoDown) {
                currentRow += 1;
            }
        }

        result.push(fighters[currentRow][currentColumn]);
    });

    return result;
}
