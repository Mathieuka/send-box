export const save = (sizes: number[], hd: number) => {
    let currentMemory = 0;
    let result = 0;

    if (sizes[0] > hd) return 0;

    for (let i = 0; i < sizes.length; i += 1) {
        if (currentMemory + sizes[i] >= hd) {
            result = i + 1;
            return result;
        }
        currentMemory += sizes[i];
    }
};
