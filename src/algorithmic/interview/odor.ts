export const computeAllergicListItems = (
    score: number
): {
    isAllergic: boolean;
    items: string[];
} => ({
    isAllergic: false,
    items: [],
});
