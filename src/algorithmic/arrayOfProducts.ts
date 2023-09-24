const getArrayOfProducts = (index: number, number: number[]) => {
    const clone = [...number];
    clone.splice(index, 1);

    return clone;
};

export function arrayOfProducts(numbers: number[]) {
    const n = numbers.length;

    const result: number[] = new Array(n);
    let leftProduct = 1;

    // Calculate left products
    for (let i = 0; i < n; i += 1) {
        result[i] = leftProduct;
        leftProduct *= numbers[i];
    }

    let rightProduct = 1;

    // Calculate right products and update the result array
    for (let i = n - 1; i >= 0; i -= 1) {
        result[i] *= rightProduct;

        rightProduct *= numbers[i];
    }

    return result;
}
