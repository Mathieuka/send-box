import { superStreetFighterSelection } from '../superStreetFigtherSelection';

describe('superStreetFighterSelection', () => {
    describe('Moving right', () => {
        test('Basic without blank', () => {
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

        test('With blank', () => {
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
        test('Basic without blank', () => {
            const fighters = [
                ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'E.Sagat'],
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
                'E.Sagat',
                'Dhalsim',
                'Zangief',
                'Chun Li',
                'Ken',
            ]);
        });

        test('With blank', () => {
            const fighters = [
                ['', '', 'Ryu', 'E.Honda', 'Blanka', 'Guile', '', ''],
                ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
                ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
            ];
            expect(
                superStreetFighterSelection(fighters, [0, 6], ['left', 'left'])
            ).toEqual(['Guile', 'Blanka']);
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
});
