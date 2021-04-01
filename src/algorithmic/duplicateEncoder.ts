// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
interface IObj {
    [key: string]: any;
}

export function duplicateEncode(word: string) {
    const obj: IObj = {};
    let result = '';
    const aWord = word.split('').map((char: string) => char.toLowerCase());
    const countTheNumberOfOccurrences = (occurence: string) => {
        obj[occurence] = obj[occurence] ? obj[occurence] + 1 : 1;
    };
    const buildResult = (occurence: string) => {
        result += obj[occurence] < 2 ? '(' : ')';
    };
    aWord.forEach(countTheNumberOfOccurrences);
    aWord.forEach(buildResult);
    return result;
}
