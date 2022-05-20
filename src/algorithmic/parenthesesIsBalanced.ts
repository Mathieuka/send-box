export const parenthesesIsBalanced = (str: string): any => {
    let stack: string[] = [];
    const add = (v: string) => {
        stack = stack.concat(v);
    };
    const dequeue = () => stack.pop();
    const getTop = () => stack[stack.length - 1];
    const stackIsEmpty = () => stack.length === 0;

    const arr = str.split('');

    for (let i = 0; i <= arr.length; i += 1) {
        const topElement = getTop();

        if (arr[i] === '(' || arr[i] === ')') {
            if (topElement === '(' && arr[i] === ')') {
                dequeue();
                if (stackIsEmpty() && i === str.length - 1) {
                    return true;
                }
            } else if (
                (stackIsEmpty() && arr[i] === ')') ||
                (!stackIsEmpty() && !arr[i])
            ) {
                return false;
            }

            if (arr[i] === '(') {
                add(arr[i]);
            }
        } else {
            return false;
        }
    }
};
