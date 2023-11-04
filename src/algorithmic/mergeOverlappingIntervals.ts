export function mergeOverlappingIntervals(
    intervals: number[][],
    currentIndex = 0
): number[][] {
    if (currentIndex === 0) {
        intervals.sort((a, b) => a[0] - b[0]);
    }

    if (currentIndex < intervals.length - 1) {
        const currentInterval = intervals[currentIndex];
        const nextInterval = intervals[currentIndex + 1];

        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
            intervals.splice(currentIndex + 1, 1);
            return mergeOverlappingIntervals(intervals, currentIndex);
        }

        return mergeOverlappingIntervals(intervals, currentIndex + 1);
    }

    return intervals;
}
