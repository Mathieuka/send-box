export function curry(callback: any) {
    return function curriedCb(...args: any) {
        if (!args.length) {
            return callback();
        }

        return (...otherArgs: any) => {
            if (!otherArgs.length) {
                return callback(...args);
            }

            return curriedCb(...args, ...otherArgs);
        };
    };
}
