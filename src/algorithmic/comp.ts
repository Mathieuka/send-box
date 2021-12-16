export const comp = (a: number[] | null, b: number[] | null) => {
    if (!a || !b) return false;
    let counter = 0;
    const bSquared: number[] = b.map((value: number) => Math.sqrt(value));
    const removeMatchedNumberOfBSquared = (indexOfTheSquaredNumber: number) =>
        bSquared.splice(indexOfTheSquaredNumber, 1);
    [...a].forEach((aValue) => {
        const indexOfTheSquaredNumber: number = bSquared.findIndex(
            (bValue) => aValue === bValue
        );

        if (indexOfTheSquaredNumber > -1) {
            removeMatchedNumberOfBSquared(indexOfTheSquaredNumber);
            counter += 1;
        }
    });
    return counter === a.length;
};
