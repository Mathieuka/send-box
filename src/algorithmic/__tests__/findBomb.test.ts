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

        test('Random initial position one jump', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 1,
                    jumpThreshold: 1,
                    direction: ['R'],
                    bombPosition: 6,
                })
            ).toEqual(6);
            // [0,i,0,0,0,0,b,0,0,0,0]
        });

        test('Random initial position two jumps', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 1,
                    jumpThreshold: 1,
                    direction: ['R', 'R'],
                    bombPosition: 8,
                })
            ).toEqual(8);
            // [0,i,0,0,0,0,0,0,b,0,0]
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
                    bombPosition: 2,
                })
            ).toEqual(2);
            // [0,0,b,0,0,0,0,0,0,0,i]
        });

        test('Random initial position one jump 1', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 9,
                    jumpThreshold: 1,
                    direction: ['L'],
                    bombPosition: 4,
                })
            ).toEqual(4);
            // [0,0,0,0,b,0,0,0,0,i,0]
        });

        test('Random initial position one jump 2', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 8,
                    jumpThreshold: 1,
                    direction: ['L', 'L'],
                    bombPosition: 2,
                })
            ).toEqual(2);
            // [0,0,b,0,1,0,0,0,i,0,0]
        });
    });

    describe('Find bomb in both direction', () => {
        test('random initial position', () => {
            expect(
                findBomb({
                    width: 10,
                    initialPosition: 2,
                    jumpThreshold: 1,
                    direction: ['R', 'L'],
                    bombPosition: 4,
                })
            ).toEqual(4);
            // [0,0,i,0,b,0,1,0,0,0,0]
        });
    });
});
