import { findBomb } from '../findBomb';

describe('Find bomb based on direction left or right with jump number threshold', () => {
    describe('find bomb in right', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 0,
                    jumpThreshold: 1,
                    direction: ['R'],
                    bombPosition: 5,
                })
            ).toEqual(5);
            // [i,0,0,0,0,b,0,0,0,0,0]
        });
        test('Two jump', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 0,
                    jumpThreshold: 2,
                    direction: ['R', 'R'],
                    bombPosition: 8,
                })
            ).toEqual(8);
            // [i,0,0,0,0,0,0,0,b,0,0]
        });
    });

    describe('find bomb in left', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 10,
                    jumpThreshold: 1,
                    direction: ['L'],
                    bombPosition: 5,
                })
            ).toEqual(5);
            // [0,0,0,0,0,b,0,0,0,0,i]
        });

        test('Two jump', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 10,
                    jumpThreshold: 2,
                    direction: ['L', 'L'],
                    bombPosition: 3,
                })
            ).toEqual(3);
            // [0,0,0,b,0,0,0,0,0,0,i]
        });
    });
});
