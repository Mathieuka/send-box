export const parenthesesIsBalanced = (str: string): boolean => {
    const arr = str.split('');
    let stack: string[] = [];

    for (let i = 0; i <= arr.length; i += 1) {
        const topElement = stack[stack.length - 1];

        if (
            arr[i] === '(' ||
            arr[i] === ')' ||
            arr[i] === '[' ||
            arr[i] === ']' ||
            arr[i] === '}' ||
            arr[i] === '{'
        ) {
            if (
                (topElement === '(' && arr[i] === ')') ||
                (topElement === '[' && arr[i] === ']') ||
                (topElement === '{' && arr[i] === '}')
            ) {
                stack.pop();
                const stackIsEmpty = stack.length === 0;
                const noMoreChar = i === str.length - 1;

                if (stackIsEmpty && noMoreChar) {
                    return true;
                }
            }

            if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
                stack = stack.concat(arr[i]);
            }
        }
    }

    return false;
};
