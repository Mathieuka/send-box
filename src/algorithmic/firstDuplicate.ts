const hasTwin = (currNumber: number, array: number[]) =>
    array.findIndex((number) => number === currNumber);

export function firstDuplicateValue(array: number[]) {
    const obj: Record<string, number> = {};
    let result: null | number = -1;

    if (array.length === 0) return -1;

    if (array.length <= 2) {
        if (array[0] === array[1]) {
            return array[0];
        }
        return -1;
    }

    for (let i = 0; i < array.length; i += 1) {
        const index = hasTwin(array[i], array.slice(i + 1));

        if (index !== -1) {
            const clone: any[] = [...array];
            clone[i] = '';
            const ind = clone.findIndex((val) => val === array[i]);

            if (!obj[array[i]]) {
                if (result === -1 || obj[result] > ind) {
                    result = array[i];
                }
                obj[array[i]] = ind;
            }
        }
    }

    return result;
}
