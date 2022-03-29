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

    moves.forEach((direction: string) => {
        if (direction === 'right') {
            if (
                fighters[currentRow][currentColumn + 1] === '' ||
                currentColumn + 1 > colLength
            ) {
                if (currentColumn + 1 > colLength) {
                    currentColumn = 0;
                } else {
                    currentColumn += 1;
                }

                while (fighters[currentRow][currentColumn] === '') {
                    currentColumn += 1;
                    if (currentColumn + 1 > fighters[0].length) {
                        currentColumn = 0;
                    }
                }
            } else {
                currentColumn += 1;
            }
        }

        if (direction === 'left') {
            if (fighters[currentRow][currentColumn - 1] === '') {
                if (currentColumn - 1 < 0) {
                    currentColumn = colLength;
                } else {
                }
                currentColumn -= 1;

                while (fighters[currentRow][currentColumn] === '') {
                    currentColumn -= 1;
                    if (currentColumn - 1 < 0) {
                        currentColumn = colLength;
                    }
                }
            } else {
                currentColumn -= 1;
            }
        }

        if (direction === 'up') {
            if (currentRow > 0) {
                if (fighters[currentRow - 1][currentColumn] !== '') {
                    currentRow -= 1;
                }
            }
        }

        if (direction === 'down') {
            if (currentRow < rowLength) {
                if (fighters[currentRow + 1][currentColumn] !== '') {
                    currentRow += 1;
                }
            }
        }

        result.push(fighters[currentRow][currentColumn]);
    });
    return result;
}
