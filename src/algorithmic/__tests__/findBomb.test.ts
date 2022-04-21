import { findBomb } from '../findBomb';

describe('Find bomb based on direction left or right with jump number threshold', () => {
    describe('find bomb in right', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 0,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['R'],
                    bombPosition: '5 0',
                })
            ).toEqual('5 0');
            // [i,0,0,0,0,b,0,0,0,0,0]
        });
        test('Two jump', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 0,
                    Y0: 0,
                    jumpThreshold: 2,
                    direction: ['R', 'R'],
                    bombPosition: '8 0',
                })
            ).toEqual('8 0');
            // [i,0,0,0,0,.,0,0,b,0,0]
        });

        test('Random initial position one jump', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 1,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['R'],
                    bombPosition: '6 0',
                })
            ).toEqual('6 0');
            // [0,i,0,0,0,0,b,0,0,0,0]
        });

        test('Random initial position two jumps', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 1,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['R', 'R'],
                    bombPosition: '8 0',
                })
            ).toEqual('8 0');
            // [0,i,0,0,0,0,0,0,b,0,0]
        });
    });

    describe('find bomb in left', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 10,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['L'],
                    bombPosition: '5 0',
                })
            ).toEqual('5 0');
            // [0,0,0,0,0,b,0,0,0,0,i]
        });

        test('Two jump', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 10,
                    Y0: 0,
                    jumpThreshold: 2,
                    direction: ['L', 'L'],
                    bombPosition: '2 0',
                })
            ).toEqual('2 0');
            // [0,0,b,0,0,0,0,0,0,0,i]
        });

        test('Random initial position one jump 1', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 9,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['L'],
                    bombPosition: '4 0',
                })
            ).toEqual('4 0');
            // [0,0,0,0,b,0,0,0,0,i,0]
        });

        test('Random initial position one jump 2', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 8,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['L', 'L'],
                    bombPosition: '2 0',
                })
            ).toEqual('2 0');
            // [0,0,b,0,1,0,0,0,i,0,0]
        });
    });

    describe('Find bomb in both direction start to right', () => {
        test('random initial position', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 2,
                    Y0: 0,
                    jumpThreshold: 1,
                    direction: ['R', 'L'],
                    bombPosition: '4 0',
                })
            ).toEqual('4 0');
            // [0,0,i,0,b,0,1,0,0,0,0]
        });

        test('random initial position large array', () => {
            expect(
                findBomb({
                    width: 20,
                    height: 0,
                    X0: 1,
                    Y0: 0,
                    jumpThreshold: 3,
                    direction: ['R', 'L', 'R'],
                    bombPosition: '8 0',
                })
            ).toEqual('8 0');
            // hiy: 9, 6, 8
            // [0,i,0,0,0,0,2,0,b,0,0, 1, 0,0,0,0,0,0,0,0,0]
        });
    });
    describe('Find bomb in both direction start to left', () => {
        test('random initial position', () => {
            expect(
                findBomb({
                    width: 10,
                    height: 0,
                    X0: 8,
                    Y0: 0,
                    jumpThreshold: 2,
                    direction: ['L', 'R'],
                    bombPosition: '6 0',
                })
            ).toEqual('6 0');
            // [0,0,0,0,1,0,b,0,i,0,0]
        });

        test('random initial position large array', () => {
            expect(
                findBomb({
                    width: 20,
                    height: 0,
                    X0: 18,
                    Y0: 0,
                    jumpThreshold: 3,
                    direction: ['L', 'R', 'L'],
                    bombPosition: '9 0',
                })
            ).toEqual('9 0');
            // hit: 11, 7, 9
            // [0,0,0,0,0,0,0,0,0,1,0,b,0,2,0,0,0,0,i,0,0]
        });
    });

    describe('Find bomb in down right', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 6,
                    height: 6,
                    X0: 3,
                    Y0: 2,
                    jumpThreshold: 2,
                    direction: ['DR'],
                    bombPosition: '5 4',
                })
            ).toEqual('5 4');
            // hit:
            /*
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,i,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,b,0]
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            */
        });

        test('On the corner', () => {
            expect(
                findBomb({
                    width: 6,
                    height: 6,
                    X0: 3,
                    Y0: 2,
                    jumpThreshold: 2,
                    direction: ['DR', 'DR'],
                    bombPosition: '6 5',
                })
            ).toEqual('6 5');
            /*
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,i,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,.,0]
            [0,0,0,0,0,0,.]
            [0,0,0,0,0,0,b]
            */
        });
    });

    describe('Find bomb in down left', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 6,
                    height: 6,
                    X0: 3,
                    Y0: 2,
                    jumpThreshold: 2,
                    direction: ['DL'],
                    bombPosition: '1 4',
                })
            ).toEqual('1 4');
            // hit:
            /*
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,i,0,0,0]
            [0,0,0,0,0,0,0]
            [0,b,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            */
        });

        test('On the corner', () => {
            expect(
                findBomb({
                    width: 6,
                    height: 6,
                    X0: 3,
                    Y0: 2,
                    jumpThreshold: 3,
                    direction: ['DL', 'DL'],
                    bombPosition: '0 5',
                })
            ).toEqual('0 5');
            /*
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,i,0,0,0]
            [0,0,0,0,0,0,0]
            [0,.,0,0,0,0,0]
            [b,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            */
        });
    });

    describe('Find bomb in down', () => {
        test('One jump', () => {
            expect(
                findBomb({
                    width: 6,
                    height: 6,
                    X0: 3,
                    Y0: 2,
                    jumpThreshold: 1,
                    direction: ['D'],
                    bombPosition: '3 4',
                })
            ).toEqual('3 4');
            /*
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,i,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,b,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            */
        });

        test('Two jump', () => {
            expect(
                findBomb({
                    width: 6,
                    height: 6,
                    X0: 3,
                    Y0: 2,
                    jumpThreshold: 1,
                    direction: ['D', 'D'],
                    bombPosition: '3 5',
                })
            ).toEqual('3 5');
            /*
            [0,0,0,0,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,i,0,0,0]
            [0,0,0,0,0,0,0]
            [0,0,0,.,0,0,0]
            [0,0,0,b,0,0,0]
            [0,0,0,0,0,0,0]
            */
        });
    });
});
