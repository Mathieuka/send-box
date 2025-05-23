export function isValidSubsequence(array: number[], sequence: number[]) {
    let arrIdx = 0;
    let seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx += 1;
        }
        arrIdx += 1;
    }

    return seqIdx === sequence.length;
}
