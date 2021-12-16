// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// n => 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = result = n * p
export class G964 {
    public static digPow = (n: number, p: number) => {
        const nNumbers = n.toString().split('');
        let powIdx = p;
        let sumOfTheDigitsOfN = 0;
        nNumbers.forEach((num) => {
            sumOfTheDigitsOfN += Math.ceil(parseInt(num, 10) ** powIdx);
            powIdx += 1;
        });
        const k = sumOfTheDigitsOfN / n;
        if (k % 1 !== 0) {
            return -1;
        }
        return sumOfTheDigitsOfN / n;
    };
}
