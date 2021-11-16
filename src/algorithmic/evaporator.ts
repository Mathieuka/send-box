export const evaporator = (
    content: number,
    percentage: number,
    threshold: number
): number => {
    let day = 0;
    let evaporatorContent = content;
    let quantityLostPerDay: number = (evaporatorContent * percentage) / 100;
    const quantityLimitForUse: number = (evaporatorContent * threshold) / 100;
    while (evaporatorContent >= quantityLimitForUse) {
        day += 1;
        evaporatorContent -= quantityLostPerDay;
        quantityLostPerDay = (evaporatorContent * percentage) / 100;
    }
    return day;
};
