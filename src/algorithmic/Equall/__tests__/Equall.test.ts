import { inputs } from './inputs';
import { Stream } from '../Equall';

describe('Equall', () => {
    it('True is true', () => {
        const stream = new Stream();

        expect(inputs).toEqual(inputs);
        const res = stream.out([
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'agent',
                type: 'thinking',
                content: 'Analyzing',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
        ]);

        expect(res).toEqual('Analyzing');
    });
});
