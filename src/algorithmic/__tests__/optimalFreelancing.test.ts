import { optimalFreelancing } from '../optimalFreelancing';

describe('optimalFreelancing', () => {
    test('One job', () => {
        expect(optimalFreelancing([{ deadline: 1, payment: 1 }])).toEqual(1);
    });

    test('Two job with dead line less than 7', () => {
        expect(
            optimalFreelancing([
                { deadline: 1, payment: 1 },
                { deadline: 2, payment: 2 },
            ])
        ).toEqual(3);
    });

    test('Tree job', () => {
        expect(
            optimalFreelancing([
                { deadline: 1, payment: 1 },
                { deadline: 2, payment: 2 },
                { deadline: 2, payment: 2 },
            ])
        ).toEqual(4);
    });
});
