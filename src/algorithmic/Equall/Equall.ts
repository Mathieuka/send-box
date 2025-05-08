import { Input } from './__tests__/inputs';

interface IStream {
    out: (input: Input[]) => string;
}

export class Stream implements IStream {
    public out(inputs: Input[]) {
        let response = '';

        for (let i = 0; i < inputs.length; i += 1) {
            if (i === 0) {
                response += inputs[i].content;
            } else {
                response += ` ${inputs[i].content}`;
            }
        }

        return response;
    }
}
