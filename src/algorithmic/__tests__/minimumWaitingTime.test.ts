import { minimumWaitingTime } from '../minimumWaitingTime';

test('Should return the minimum amount of total time for execute all the queries', () => {
    expect(minimumWaitingTime([1, 2, 3])).toEqual(4);
    expect(minimumWaitingTime([2, 1, 1, 1])).toEqual(6);
    expect(minimumWaitingTime([3, 2, 1, 2, 6])).toEqual(17);
});
