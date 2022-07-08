export function closestToZero(arr: number[]): number | null {
    const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
    return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
}
