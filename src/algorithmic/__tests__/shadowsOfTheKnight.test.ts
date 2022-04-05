import { shadowsOfTheKnight } from '../shadowsOfTheKnight';

// Possible direction: U, UR, R, DR, D, DL, L, UL

describe('shadowsOfTheKnight', () => {
    test('The bomb is in the same place', () => {
        expect(
            shadowsOfTheKnight({
                width: 5,
                height: 5,
                maxJumps: 1,
                X0: 2,
                Y0: 2,
                bombDir: '',
                bombCoordinate: '2 2',
            })
        ).toEqual('2 2');
    });

    // test('The bomb is just one jump Down', () => {
    //     expect(
    //         shadowsOfTheKnight({
    //             width: 5,
    //             height: 5,
    //             maxJumps: 1,
    //             X0: 2,
    //             Y0: 2,
    //             bombDir: 'D',
    //             bombCoordinate: '2 3',
    //         })
    //     ).toEqual('2 3');
    // });
});

/*
const arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
*/
