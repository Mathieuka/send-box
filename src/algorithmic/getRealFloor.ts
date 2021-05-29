export const getRealFloor = (USFloor: number): number => {
    if (USFloor <= 0) return USFloor;
    if (USFloor > 13) return USFloor - 2;
    return USFloor - 1;
};
