export const doors = (n: number): number => {
    const doors: boolean[] = Array.from({ length: n }, () => true);
    for (let lap = 2; lap <= n; lap += 1) {
        for (let idxDoor = lap - 1; idxDoor < n; idxDoor += lap) {
            doors[idxDoor] = !doors[idxDoor];
        }
    }
    return doors.filter((isOpen) => isOpen).length;
};
