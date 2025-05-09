import { inputs } from './inputs';
import { Stream } from '../Equall';

describe('Equall', () => {
    it('With one input of type partial', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 'Analyzing',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
        ]);

        expect(response).toEqual('Analyzing');
    });

    it('With one input of type thinking (should be ignored)', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
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

        expect(response).toEqual('');
    });

    it('With 2 ordered inputs of type partial', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 'Hello',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' World',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 1,
            },
        ]);

        expect(response).toEqual('Hello World');
    });

    it('With mixed type inputs (should only process partial)', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'agent',
                type: 'thinking',
                content: 'Thinking...',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 'Hello',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' World',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 1,
            },
        ]);

        expect(response).toEqual('Hello World');
    });

    it('With 4 unordered inputs of type partial', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' World',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 1,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 'Hello',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: '!',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 3,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' How are you',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 2,
            },
        ]);

        expect(response).toEqual('Hello World How are you!');
    });

    it('With multiple message IDs', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
            {
                id: 'message-1',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 'First',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
            {
                id: 'message-2',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 'Second',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 0,
            },
            {
                id: 'message-1',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' Message',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 1,
            },
            {
                id: 'message-2',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' Message',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 1,
            },
        ]);

        expect(response).toEqual('First Message Second Message');
    });

    it('With real-world example from inputs', () => {
        const stream = new Stream();

        const response = stream.streamProcess([
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: '##',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 4,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: " Key Events in Elevate Inc.'",
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 5,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: 's History\n\n###',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 6,
            },
            {
                id: '10000d82-aa41-46b0-be88-7f8028f1076f',
                chat_id: '5697e557-eb4b-4508-bc06-d36973025db7',
                role: 'assistant',
                type: 'partial',
                content: ' Incorporation and Initial Setup\n- Incorporate',
                parent_message_id: '8f0d4c00-09c7-499c-bd92-f26d418c908b',
                data: null,
                error: null,
                thinking_traces: {},
                sequence_number: 7,
            },
        ]);

        expect(response).toEqual(
            "## Key Events in Elevate Inc.'s History\n\n### Incorporation and Initial Setup\n- Incorporate"
        );
    });
});
