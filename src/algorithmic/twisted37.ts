function f(n: number): string {
    return n.toString().replace(/7{1}|3{1}/g, (x) => (x === '7' ? '3' : '7'));
}

export function sortTwisted37(array: number[]): number[] {
    return array.slice().sort((a, b) => +f(a) - +f(b));
}
