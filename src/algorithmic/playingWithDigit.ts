export class G964 {
    public static digPow = (n: number, p: number) => {
        let pow: number = p;
        let sumOfTheDigitsOfN = 0;
        const nNumbers: number[] = n
            .toString()
            .split('')
            .map((value) => parseInt(value, 10));

        nNumbers.forEach((num) => {
            sumOfTheDigitsOfN += num ** pow;
            pow += 1;
        });

        const result = sumOfTheDigitsOfN / n;
        return result % 1 === 0 ? result : -1;
    };
}
