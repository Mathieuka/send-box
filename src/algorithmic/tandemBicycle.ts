export function tandemBicycle(
    redShirtSpeeds: number[],
    blueShirtSpeeds: number[],
    fastest: boolean
) {
    const blue = [...blueShirtSpeeds].sort((a, b) => (fastest ? b - a : a - b));
    const red = [...redShirtSpeeds].sort((a, b) => a - b);
    let totalSpeed = 0;
    for (let i = 0; i < red.length; i += 1) {
        totalSpeed += Math.max(red[i], blue[i]);
    }
    return totalSpeed;
}
