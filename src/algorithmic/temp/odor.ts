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

const items: Record<ItemName, number> = {
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
    list: () => ItemName[];
}

export class Allergies implements IAllergies {
    // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-empty-function
    constructor(private score: number) {}

    public allergicTo(itemName: ItemName): boolean {
        return items[itemName] <= this.score;
    }

    // eslint-disable-next-line class-methods-use-this
    public list(): ItemName[] {
        const accumulator = 0;
        const allergicItems: ItemName[] = [];

        for (const item in items) {
            if (items[item as ItemName] <= this.score) {
                allergicItems.push(item as ItemName);

                if (items[item as ItemName] === this.score) {
                    return [item as ItemName];
                }
            }
        }

        return allergicItems;
    }
}
