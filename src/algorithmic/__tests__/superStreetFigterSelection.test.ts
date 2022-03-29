import { superStreetFighterSelection } from '../superStreetFigtherSelection';

const fighters = [
    ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
    ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
    ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
];

describe('superStreetFighterSelection', () => {
    describe('Moving horizontally with rotation AND with blank case', () => {
        test('Moving to the right', () => {
            const fighters = [
                ['', '', 'Ryu', '', 'E.Honda', 'Blanka', 'Guile', '', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(
                    fighters,
                    [0, 6],
                    ['right', 'right']
                )
            ).toEqual(['Ryu', 'E.Honda']);
        });

        test('Moving to the left', () => {
            const fighters = [
                ['', '', 'Ryu', 'E.Honda', 'Blanka', '', 'Guile', '', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(fighters, [0, 6], ['left', 'left'])
            ).toEqual(['Blanka', 'E.Honda']);
        });
    });

    describe('Moving Vertically', () => {
        const fighters = [
            ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
            ['', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
            ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
        ];
        test('Move up', () => {
            expect(
                superStreetFighterSelection(fighters, [2, 0], ['up', 'up'])
            ).toEqual(['Vega', 'Vega']);
        });

        test('Move Down', () => {
            expect(
                superStreetFighterSelection(fighters, [1, 1], ['down', 'down'])
            ).toEqual(['T.Hawk', 'T.Hawk']);
        });
    });

    // test('Random', () => {
    //     const position = [3, 3];
    //     const fighters4 = [
    //         ['', 'Ryu', 'E.Honda', 'Cammy'],
    //         ['Balrog', 'Ken', 'Chun Li', ''],
    //         ['Vega', '', 'Fei Long', 'Balrog'],
    //         ['Blanka', 'Guile', '', 'Chun Li'],
    //         ['M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
    //         ['Deejay', 'Cammy', '', 'T.Hawk'],
    //     ];
    //     const moves = [
    //         'left',
    //         'left',
    //         'down',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'down',
    //
    //         'left', // X
    //         'left',
    //         'left',
    //         'left',
    //         'up',
    //         'right',
    //         'right',
    //         'up', // Guile
    //         'right', // Chun li but is Blanka
    //         'right',
    //         'right',
    //     ];
    //     const solution = [
    //         'Guile',
    //         'Blanka',
    //         'M.Bison',
    //         'Zangief',
    //         'Dhalsim',
    //         'Sagat',
    //         'M.Bison',
    //         'Deejay',
    //         'T.Hawk',
    //         'Cammy',
    //         'Deejay',
    //         'T.Hawk',
    //         'Sagat',
    //         'M.Bison',
    //         'Zangief',
    //         'Guile',
    //         'Chun Li',
    //         'Blanka',
    //         'Guile',
    //     ];
    //     expect(superStreetFighterSelection(fighters4, position, moves)).toEqual(
    //         solution
    //     );
    // });

    // test('should rotate on all rows', () => {
    //     const position = [0, 2];
    //     const fighters3 = [
    //         ['', 'Ryu', 'E.Honda', 'Cammy', 'Blanka', 'Guile', '', 'Chun Li'],
    //         // eslint-disable-next-line
    //         ['Balrog', 'Ken', 'Chun Li', '', 'M.Bison', 'Zangief', 'Dhalsim', 'Sagat',],
    //         ['Vega', '', 'Fei Long', 'Balrog', 'Deejay', 'Cammy', '', 'T.Hawk'],
    //     ];
    //     const moves = [
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //
    //         'right', // "" should be Ryu
    //
    //         'right',
    //         'down',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'left',
    //         'down',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //         'right',
    //     ];
    //     const solution = [
    //         'Cammy',
    //         'Blanka',
    //         'Guile',
    //         'Chun Li',
    //         'Ryu',
    //         'E.Honda',
    //         'Chun Li',
    //         'Ken',
    //         'Balrog',
    //         'Sagat',
    //         'Dhalsim',
    //         'Zangief',
    //         'M.Bison',
    //         'Chun Li',
    //         'Ken',
    //         'Balrog',
    //         'Sagat',
    //         'Dhalsim',
    //         'Zangief',
    //         'Cammy',
    //         'T.Hawk',
    //         'Vega',
    //         'Fei Long',
    //         'Balrog',
    //         'Deejay',
    //         'Cammy',
    //         'T.Hawk',
    //         'Vega',
    //         'Fei Long',
    //         'Balrog',
    //         'Deejay',
    //         'Cammy',
    //     ];
    //     expect(superStreetFighterSelection(fighters3, position, moves)).toEqual(
    //         solution
    //     );
    // });
});
