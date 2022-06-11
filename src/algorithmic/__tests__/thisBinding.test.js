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

// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (thisContext, ...args) {
    return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
};

const obj = { num: 0 };

function logNums(...args) {
    expect(this).toEqual(obj);
    return args.reduce((a, b) => a + b);
}

describe('Implement binding function', () => {
    test('Implement `call` function', () => {
        const result = logNums.myCall(obj, 1, 2);
        expect(result).toEqual(3);
    });

    test('Implement `apply` function ', () => {
        const result = logNums.myApply(obj, [1, 2]);
        expect(result).toEqual(3);
    });

    test('Implement `bind` function ', () => {
        const functionBound = logNums.myBind(obj, 4);
        expect(functionBound(1, 2)).toEqual(7);
    });
});
