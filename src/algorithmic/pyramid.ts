export const pyramid = (n: number) => {
    const midPoint = Math.floor((2 * n - 1) / 2);

    let level = '';
    for (let row = 0; row < n; row += 1) {
        for (let column = 0; column < 2 * n - 1; column += 1) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        if (row < n - 1) {
            level += '\n';
        }
    }
    return level;
};
