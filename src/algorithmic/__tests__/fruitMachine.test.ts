import { fruit, getFruitsOccurrences } from '../fruitMachine';

const reel1 = [
    'Wild',
    'Star',
    'Bell',
    'Shell',
    'Seven',
    'Cherry',
    'Bar',
    'King',
    'Queen',
    'Jack',
];
const reel2 = [
    'Wild',
    'Star',
    'Bell',
    'Shell',
    'Seven',
    'Cherry',
    'Bar',
    'King',
    'Queen',
    'Jack',
];
const reel3 = [
    'Wild',
    'Star',
    'Bell',
    'Shell',
    'Seven',
    'Cherry',
    'Bar',
    'King',
    'Queen',
    'Jack',
];

const reels = [reel1, reel2, reel3];

describe('Fruit machine casino ', () => {
    test('Create an object with the number of occurrences of fruits', () => {
        expect(getFruitsOccurrences(reels, [1, 2, 1])).toEqual({
            Star: 2,
        });
    });

    test('No matching items return 0', () => {
        expect(fruit(reels, [0, 1, 2])).toEqual(0);
    });

    test('Two of the same', () => {
        expect(fruit(reels, [1, 1, 2])).toEqual(18);
    });
});
