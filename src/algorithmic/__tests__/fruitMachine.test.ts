import { fruit, getFruitsWithQuantity } from '../fruitMachine';

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
        expect(getFruitsWithQuantity(reels, [1, 2, 1])).toEqual({
            Star: 2,
        });
    });

    test('Create an object with the number of occurrences of fruits with one Wild', () => {
        expect(getFruitsWithQuantity(reels, [1, 0, 1])).toEqual({
            Star: 2,
            Wild: 1,
        });
    });

    test('No matching items return 0', () => {
        expect(fruit(reels, [0, 1, 2])).toEqual(0);
    });

    test('Two of the same', () => {
        expect(fruit(reels, [1, 2, 1])).toEqual(9);
    });

    test('Two of the same', () => {
        expect(fruit(reels, [1, 1, 1])).toEqual(90);
    });

    test('Three Wild', () => {
        expect(fruit(reels, [0, 0, 0])).toEqual(100);
    });

    test('Two of the same + one wild', () => {
        expect(fruit(reels, [1, 1, 0])).toEqual(18);
    });
});
