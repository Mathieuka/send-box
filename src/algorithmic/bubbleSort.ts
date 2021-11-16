export const bubbleSort = (arr: number[]): number[] => {
    const innerArr = [...arr];
    let stop = false;

    while (!stop) {
        let numberOfElementSorted = 0;
        // eslint-disable-next-line no-loop-func
        innerArr.forEach((currentValue, i) => {
            const nextValue = innerArr[i + 1];
            if (typeof nextValue === 'number' && currentValue > nextValue) {
                innerArr[i + 1] = currentValue;
                innerArr[i] = nextValue;
            } else {
                numberOfElementSorted += 1;
            }
            const isSorted = numberOfElementSorted === innerArr.length;
            if (isSorted) {
                stop = true;
            }
        });
    }

    return innerArr;
};
