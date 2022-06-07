export function classPhotos(
    redShirtHeights: number[],
    blueShirtHeights: number[]
) {
    const redShirt = redShirtHeights.slice().sort((a, b) => a - b);
    const blueShirt = blueShirtHeights.slice().sort((a, b) => a - b);

    const shirtColorInFront = redShirt[0] < blueShirt[0] ? 'RED' : 'BLUE';

    for (let i = 0; i < redShirtHeights.length; i += 1) {
        if (shirtColorInFront === 'RED') {
            if (redShirt[i] >= blueShirt[i]) {
                return false;
            }
        } else if (blueShirt[i] >= redShirt[i]) {
            return false;
        }
    }

    return true;
}
