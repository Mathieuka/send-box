export enum ItemName {
    eggs = 'eggs',
    peanuts = 'peanuts',
    shellfish = 'shellfish',
    strawberries = 'strawberries',
    tomatoes = 'tomatoes',
    chocolate = 'chocolate',
    pollen = 'pollen',
    cats = 'cats',
}

interface IItem {
    eggs: number;
    peanuts: number;
    shellfish: number;
    strawberries: number;
    tomatoes: number;
    chocolate: number;
    pollen: number;
    cats: number;
}

const items: IItem = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
};

interface IAllergies {
    allergicTo: (itemName: ItemName) => boolean;
    // list: () => string[];
}

export class Allergies implements IAllergies {
    // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-empty-function
    constructor(private score: number) {}

    public allergicTo(itemName: ItemName): boolean {
        return items[itemName] <= this.score;
    }
}
