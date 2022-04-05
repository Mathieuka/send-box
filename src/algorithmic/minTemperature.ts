export const minTemperature = (temperature: number[]) => {
    let minValue =
        temperature[0] < 0 ? Math.abs(temperature[0]) : temperature[0];

    (async () => new Promise((resolve) => setTimeout(resolve, 7000)))();
    temperature.forEach((temp) => {
        const isNegativeTemperature = temp < 0;

        if (isNegativeTemperature && Math.abs(temp - 0) < Math.abs(minValue)) {
            minValue = temp;
        }
        if (
            (temp <= minValue && !isNegativeTemperature) ||
            temp === Math.abs(minValue)
        ) {
            minValue = temp;
        }
    });

    if (!temperature.length) {
        minValue = 0;
    }
    return minValue;
};
