export const p1 = (time: any) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(new Error('p1'));
            resolve('p1');
        }, time);
    });

const p2 = (time: any) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(new Error('p2'));
            resolve('p2');
        }, time);
    });

const p3 = (time: any) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('p3'));
            // resolve('p3');
        }, time);
    });

Promise.myRace = async function (promises: any) {
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise: any) => {
            const response = await promise;
            if (response) {
                resolve(response);
            }
        });
    });
};

Promise.myAny = function (promises: any) {
    let rejectedCount = 0;
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise: any) => {
            try {
                resolve(await promise);
            } catch (e) {
                rejectedCount += 1;
                if (rejectedCount === promises.length) {
                    reject(new Error('All promises rejected'));
                }
            }
        });
    });
};

Promise.myAll = function (promises: any) {
    const fullFiledPromises: any = [];
    let resolvedCount = 0;
    return new Promise(async (resolve, reject) => {
        promises.forEach((promise: any, idx: any) => {
            promise
                .then((response: any) => {
                    fullFiledPromises[idx] = response;
                    resolvedCount += 1;
                    if (resolvedCount === promises.length) {
                        resolve(fullFiledPromises);
                    }
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    });
};

Promise.myAllSettled = function (promises: any[]) {
    return new Promise((resolve, reject) => {
        const result: any = [];
        let settledCount = 0;
        promises.forEach((promise, idx) => {
            promise
                .then((value: string) => {
                    result[idx] = { status: 'fulfilled', value };
                })
                .catch((error: any) => {
                    result[idx] = {
                        status: 'rejected',
                        value: error.message,
                    };
                })
                .finally(() => {
                    settledCount += 1;
                    if (settledCount === promises.length) {
                        resolve(result);
                    }
                });
        });
    });
};

test.skip('myAll', async () => {
    expect(await Promise.myAll([p1(2300), p2(100), p3(100)])).toEqual([
        'p1',
        'p2',
        'p3',
    ]);
});

test('myAllSettled', async () => {
    expect(
        await Promise.myAllSettled([p1(2300), p2(100), p3(100)])
    ).toStrictEqual([
        { status: 'fulfilled', value: 'p1' },
        { status: 'fulfilled', value: 'p2' },
        { status: 'rejected', value: 'p3' },
    ]);
});
