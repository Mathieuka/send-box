export function climbingStairs(n: number): number {
    const isOdd = n % 2 === 0;
    let qty = isOdd ? 2 : 1;
    let qtyOf2 = Math.floor(n / 2);
    let qtyOf1 = n % 2;

    if (qtyOf1 === 1 && qtyOf2 === 1) {
        return 3;
    }

    while (qtyOf2 > 1) {
        if (n % 5 === 0) {
            qty += qtyOf2 + qtyOf1;
            qtyOf1 += 2;
            qtyOf2 -= 1;
        } else {
            qtyOf1 += 2;
            qtyOf2 -= 1;
            qty += qtyOf2 + qtyOf1;
        }
    }

    if (n % 5 === 0) {
        qty += qtyOf2 + qtyOf1;
    }

    return qty;
}
