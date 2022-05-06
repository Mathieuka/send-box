export const doors = (n: number): number => {
    const doors: boolean[] = [];
    for (let idx = 1; idx <= n; idx += 1) {
        doors.push(false);
    }

    for (let lap = 1; lap <= n; lap += 1) {
        for (let i = 0; i < n; i += 1) {
            if ((i + 1) % lap === 0) {
                doors[i] = !doors[i];
            }
        }
    }
    return doors.filter((v) => v).length;
};
