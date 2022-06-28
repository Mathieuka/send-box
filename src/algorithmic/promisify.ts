export function promisify(callback: (...ags: unknown[]) => unknown) {
    return (...args: unknown[]): Promise<unknown> =>
        new Promise((resolve, reject) => {
            function handleErrorAndValue(error: unknown, value: unknown) {
                if (error === null) {
                    resolve(value);
                } else {
                    reject(error);
                }
            }

            callback(...args, handleErrorAndValue);
        });
}
