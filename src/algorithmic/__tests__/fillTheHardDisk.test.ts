import { save } from '../fillTheHardDisk';

describe('Test Driven https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/typescript', () => {
    test('Should return the number of files that can be fully saved', () => {
        expect(save([45], 12)).toEqual(0);
        expect(save([1], 1)).toEqual(1);
        expect(save([1, 1], 2)).toEqual(2);
        expect(save([1, 1, 3], 5)).toEqual(3);
        expect(save([4, 4, 4, 3, 3], 12)).toEqual(3);
    });
});
