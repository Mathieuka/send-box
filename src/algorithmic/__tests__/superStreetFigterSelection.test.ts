import { superStreetFighterSelection } from '../superStreetFigtherSelection';

describe('superStreetFighterSelection', () => {
    describe('Moving right', () => {
        test('Without blank case', () => {
            const fighters = [
                ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(
                    fighters,
                    [1, 4],
                    [
                        'right',
                        'right',
                        'right',
                        'right',
                        'right',
                        'right',
                        'right',
                        'right',
                    ]
                )
            ).toEqual([
                'Sagat',
                'Balrog',
                'Ken',
                'Chun Li',
                'Zangief',
                'Dhalsim',
                'Sagat',
                'Balrog',
            ]);
        });

        test('With blank case', () => {
            const fighters = [
                ['', 'E.Honda', 'Blanka', 'Guile', 'Ryu', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(
                    fighters,
                    [0, 4],
                    ['right', 'right', 'right', 'right']
                )
            ).toEqual(['E.Honda', 'Blanka', 'Guile', 'Ryu']);
        });
    });
    describe('Moving Left', () => {
        test('Without blank case', () => {
            const fighters = [
                ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(
                    fighters,
                    [1, 3],
                    [
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                    ]
                )
            ).toEqual([
                'Chun Li',
                'Ken',
                'Balrog',
                'Sagat',
                'Dhalsim',
                'Zangief',
                'Chun Li',
                'Ken',
            ]);
        });

        test('With blank case', () => {
            const fighters = [
                ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(
                    fighters,
                    [0, 2],
                    [
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                        'left',
                    ]
                )
            ).toEqual([
                'Ryu',
                'Guile',
                'Blanka',
                'E.Honda',
                'Ryu',
                'Guile',
                'Blanka',
                'E.Honda',
            ]);
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

    describe('Moving random', () => {
        test('Random move 1', () => {
            const fighters4 = [
                ['', 'Ryu', 'E.Honda', 'Cammy'],
                ['Balrog', 'Ken', 'Chun Li', ''],
                ['Vega', '', 'Fei Long', 'Balrog'],
                ['Blanka', 'Guile', '', 'Chun Li'],
                ['M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Deejay', 'Cammy', '', 'T.Hawk'],
            ];
            const position = [3, 3];
            const moves = [
                'left',
                'left',
                'down',
                'right',
                'right',
                'right',
                'right',
                'down',
                'left',
                'left',
                'left',
                'left',
                'up',
                'right',
                'right',
                'up',
                'right',
                'right',
                'right',
            ];
            const solution = [
                'Guile',
                'Blanka',
                'M.Bison',
                'Zangief',
                'Dhalsim',
                'Sagat',
                'M.Bison',
                'Deejay',
                'T.Hawk',
                'Cammy',
                'Deejay',
                'T.Hawk',
                'Sagat',
                'M.Bison',
                'Zangief',
                'Guile',
                'Chun Li',
                'Blanka',
                'Guile',
            ];
            expect(
                superStreetFighterSelection(fighters4, position, moves)
            ).toEqual(solution);
        });

        test('Random move 2', () => {
            const fighters4 = [
                ['', 'Ryu', 'E.Honda', 'Cammy'],
                ['Balrog', 'Ken', 'Chun Li', ''],
                ['Vega', '', 'Fei Long', 'Balrog'],
                ['Blanka', 'Guile', '', 'Chun Li'],
                ['M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Deejay', 'Cammy', '', 'T.Hawk'],
            ];
            const position = [0, 3];
            const moves = [
                'left',
                'left',
                'down',
                'right',
                'right',
                'right',
                'right',
                'down',
                'left',
                'left',
                'left',
                'left',
                'down',
                'right',
                'right',
                'down',
                'right',
                'right',
                'right',
                'down',
                'left',
                'left',
                'left',
                'down',
                'left',
                'left',
                'left',
            ];

            const solution = [
                'E.Honda',
                'Ryu',
                'Ken',
                'Chun Li',
                'Balrog',
                'Ken',
                'Chun Li',
                'Fei Long',
                'Vega',
                'Balrog',
                'Fei Long',
                'Vega',
                'Blanka',
                'Guile',
                'Chun Li',
                'Sagat',
                'M.Bison',
                'Zangief',
                'Dhalsim',
                'Dhalsim',
                'Zangief',
                'M.Bison',
                'Sagat',
                'T.Hawk',
                'Cammy',
                'Deejay',
                'T.Hawk',
            ];
            expect(
                superStreetFighterSelection(fighters4, position, moves)
            ).toEqual(solution);
        });
    });
});
