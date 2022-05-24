import { tournamentWinner } from '../tournamentWinner';

describe('Tournament winner', () => {
    test('Goku win', () => {
        const competitions = [
            ['Goku', 'Picollo'],
            ['Vegeta', 'Picollo'],
            ['Vegeta', 'Goku'],
        ];
        const results = [1, 0, 0];

        expect(tournamentWinner(competitions, results)).toEqual('Goku');
    });

    test('Picollo win', () => {
        const competitions = [
            ['Goku', 'Picollo'],
            ['Vegeta', 'Picollo'],
            ['Vegeta', 'Goku'],
        ];
        const results = [0, 0, 1];

        expect(tournamentWinner(competitions, results)).toEqual('Picollo');
    });
});
