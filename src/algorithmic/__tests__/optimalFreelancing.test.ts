import { optimalFreelancing } from '../optimalFreelancing';

describe('optimalFreelancing', () => {
    test('One job', () => {
        expect(optimalFreelancing([{ deadline: 1, payment: 1 }])).toEqual(1);
    });

    test('Two jobs with dead line less than 7', () => {
        expect(
            optimalFreelancing([
                { deadline: 1, payment: 1 },
                { deadline: 2, payment: 2 },
            ])
        ).toEqual(3);
    });

    test('Tree jobs', () => {
        expect(
            optimalFreelancing([
                { deadline: 1, payment: 1 },
                { deadline: 2, payment: 2 },
                { deadline: 2, payment: 2 },
            ])
        ).toEqual(4);
    });

    test('Four jobs', () => {
        expect(
            optimalFreelancing([
                { deadline: 1, payment: 1 },
                { deadline: 2, payment: 2 },
                { deadline: 2, payment: 2 },
                { deadline: 10, payment: 2 },
            ])
        ).toEqual(6);
    });
});
