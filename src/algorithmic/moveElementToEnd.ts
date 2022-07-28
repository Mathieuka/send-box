export function moveElementToEnd(array: number[], toMove: number) {
    const newArray = [...array];
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        if (newArray[i] === toMove && newArray[j] !== toMove) {
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

        if (newArray[i] !== toMove) {
            i += 1;
        }

        if (newArray[j] === toMove) {
            j -= 1;
        }
    }

    return newArray;
}
