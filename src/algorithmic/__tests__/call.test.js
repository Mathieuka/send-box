/* eslint no-param-reassign: 0 */
// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (thisContext, ...args) {
    const fnSymbol = Symbol('fnSymbol');
    thisContext[fnSymbol] = this;
    const returnValue = thisContext[fnSymbol](...args);
    delete thisContext[fnSymbol];
    return returnValue;
};

const obj = { num: 0 };

function logNums(x, y) {
    expect(this).toEqual(obj);
    return x + y;
}

test('implement `call` function', () => {
    const result = logNums.myCall(obj, 1, 2);
    expect(result).toEqual(3);
});
