// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (callback) {
    if (!this.length) {
        return [];
    }
    const result = [];
    for (let i = 0; i < this.length; i += 1) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function (callback, initialValue) {
    if (!this.length) {
        return initialValue;
    }

    let acc = this[0];
    let idx = 1;

    if (initialValue || initialValue === 0) {
        acc = initialValue;
        idx = 0;
    }

    for (let i = idx; i < this.length; i += 1) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
};

// eslint-disable-next-line no-extend-native
Array.prototype.myFilter = function (callback) {
    if (!this.length) {
        return [];
    }
    const result = [];
    for (let i = 0; i < this.length; i += 1) {
        if (callback(this[i], i, this) === true) {
            result.push(this[i]);
        }
    }
    return result;
};

const arr = [1, 2, 3];

describe('Array methods', () => {
    test('Map', () => {
        expect(arr.myMap((v) => v)).toEqual([1, 2, 3]);
    });

    test('Reduce', () => {
        expect(
            arr.myReduce((acc, curr) => {
                acc.push(curr + 1);
                return acc;
            }, [])
        ).toEqual([2, 3, 4]);
        expect([].myReduce((a, b) => a + b, [])).toEqual([]);
        expect(arr.myReduce((a, b) => a + b)).toEqual(6);
    });

    test('Filter', () => {
        expect(arr.myFilter((v) => v > 2)).toEqual([3]);
        expect([undefined, null, true, 0].myFilter((v) => v)).toEqual([true]);
        expect(
            [0, 1, 2, 3, 4, 5].myFilter((v, i) => {
                if (i === 3) return 1;
            })
        ).toEqual([]);
    });
});
