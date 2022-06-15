export function getNthFib(n: number): number {
    if (n === 1) return 0;
    if (n === 2) return 1;
    let current = 1;
    let secondLast = 0;
    let memo = 0;
    for (let i = 2; i < n; i += 1) {
        memo = current;
        current += secondLast;
        secondLast = memo;
    }
    return current;
}
