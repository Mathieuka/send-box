import { superStreetFighterSelection } from '../superStreetFigtherSelection';

const fighters = [
    ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
    ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
    ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
];

describe('superStreetFighterSelection', () => {
    describe('Moving horizontally without blank and without rotate', () => {
        test('Moving to the right', () => {
            expect(
                superStreetFighterSelection(
                    fighters,
                    [0, 1],
                    ['right', 'right']
                )
            ).toEqual(['E.Honda', 'Blanka']);
        });

        test('Moving to the left', () => {
            expect(
                superStreetFighterSelection(fighters, [0, 4], ['left', 'left'])
            ).toEqual(['Blanka', 'E.Honda']);
        });
    });

    describe('Moving horizontally with rotation without blank', () => {
        test('Moving to the right', () => {
            expect(
                superStreetFighterSelection(
                    fighters,
                    [1, 5],
                    ['right', 'right']
                )
            ).toEqual(['Balrog', 'Ken']);
        });

        test('Moving to the left', () => {
            expect(
                superStreetFighterSelection(fighters, [1, 0], ['left', 'left'])
            ).toEqual(['Sagat', 'Dhalsim']);
        });
    });

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
});
