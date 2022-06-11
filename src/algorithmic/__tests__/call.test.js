/* eslint no-param-reassign: 0 */
// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (thisContext, ...args) {
    const fnSymbol = Symbol('fnSymbol');
    thisContext[fnSymbol] = this;
    const returnValue = thisContext[fnSymbol](...args);
    delete thisContext[fnSymbol];
    return returnValue;
};

// eslint-disable-next-line no-extend-native
Function.prototype.myApply = function (thisContext, args = []) {
    return this.myCall(thisContext, ...args);
};

const obj = { num: 0 };

function logNums(x, y) {
    expect(this).toEqual(obj);
    return x + y;
}

describe('Implement binding function', () => {
    test('Implement `call` function', () => {
        const result = logNums.myCall(obj, 1, 2);
        expect(result).toEqual(3);
    });

    test('Implement apply function ', () => {
        const result = logNums.myApply(obj, [1, 2]);
        expect(result).toEqual(3);
    });
});
