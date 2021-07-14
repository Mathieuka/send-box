export const binarySearch = (arr?: number[], nbr?: number): number => {
    if (!arr?.length || !nbr) return -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === nbr) {
            return mid;
        }

        if (arr[mid] < nbr) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
};
