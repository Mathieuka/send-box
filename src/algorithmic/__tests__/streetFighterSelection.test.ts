import { streetFighterSelection } from '../streetFighterSelection';

const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

describe('Street Fighter selection', () => {
    test('move right', () => {
        expect(
            streetFighterSelection(
                fighters,
                [0, 0],
                ['right', 'right', 'right', 'right', 'right', 'right']
            )
        ).toStrictEqual([
            'E.Honda',
            'Blanka',
            'Guile',
            'Balrog',
            'Vega',
            'Ryu',
        ]);
    });

    test('move left', () => {
        expect(
            streetFighterSelection(fighters, [0, 0], ['left'])
        ).toStrictEqual(['Vega']);
    });

    test('move up', () => {
        expect(streetFighterSelection(fighters, [0, 0], ['up'])).toStrictEqual([
            'Ryu',
        ]);

        expect(
            streetFighterSelection(fighters, [0, 0], ['up', 'up'])
        ).toStrictEqual(['Ryu', 'Ryu']);

        expect(streetFighterSelection(fighters, [0, 1], ['up'])).toStrictEqual([
            'Ryu',
        ]);
    });

    test('move down', () => {
        expect(
            streetFighterSelection(fighters, [0, 0], ['down'])
        ).toStrictEqual(['Ken']);

        expect(
            streetFighterSelection(fighters, [0, 0], ['down', 'down'])
        ).toStrictEqual(['Ken', 'Ken']);
    });
});
