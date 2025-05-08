import { Input } from './__tests__/inputs';

interface Stream {
    out: (input: Input[]) => string;
}

export class Stream {
    // eslint-disable-next-line no-useless-constructor
    constructor() {}

    public out(input: Input[]) {
        return input[0].content;
    }
}
