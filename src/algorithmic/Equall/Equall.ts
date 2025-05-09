import { Input } from './__tests__/inputs';

interface IStream {
    streamProcess: (input: Input[]) => string;
}

export class Stream implements IStream {
    // Map of message ID to a map of sequence numbers to inputs
    private buffers: Map<string, Map<number, Input>> = new Map();

    // Map of message ID to result array (indexed by sequence number)
    private results: Map<string, Map<number, string>> = new Map();

    // Map of message ID to the lowest sequence number seen
    private lowestSequences: Map<string, number> = new Map();

    // Map of message ID to the highest sequence number seen
    private highestSequences: Map<string, number> = new Map();

    public streamProcess(inputs: Input[]): string {
        if (inputs.length === 0) {
            return '';
        }

        // Reset state for this processing run
        this.buffers = new Map();
        this.results = new Map();
        this.lowestSequences = new Map();
        this.highestSequences = new Map();

        // Process each input as if it was received in a stream
        for (const input of inputs) {
            this.processInput(input);
        }

        // Combine all results from all message IDs
        const allResults: string[] = [];
        for (const [id, resultMap] of this.results.entries()) {
            if (resultMap.size > 0) {
                const lowest = this.lowestSequences.get(id)!;
                const highest = this.highestSequences.get(id)!;

                // Combine the results in sequence order
                const orderedResult: string[] = [];
                for (let i = lowest; i <= highest; i += 1) {
                    if (resultMap.has(i)) {
                        orderedResult.push(resultMap.get(i)!);
                    }
                }

                allResults.push(orderedResult.join(''));
            }
        }

        return allResults.join(' ');
    }

    private processInput(input: Input): void {
        // Only process inputs with type "partial"
        if (input.type !== 'partial') {
            return;
        }

        const messageId = input.id;
        const sequenceNumber = input.sequence_number;

        // Initialize data structures for this message ID if needed
        if (!this.buffers.has(messageId)) {
            this.buffers.set(messageId, new Map());
            this.results.set(messageId, new Map());
            this.lowestSequences.set(messageId, sequenceNumber);
            this.highestSequences.set(messageId, sequenceNumber);
        } else {
            // Update lowest and highest sequence numbers
            const currentLowest = this.lowestSequences.get(messageId)!;
            const currentHighest = this.highestSequences.get(messageId)!;

            if (sequenceNumber < currentLowest) {
                this.lowestSequences.set(messageId, sequenceNumber);
            }

            if (sequenceNumber > currentHighest) {
                this.highestSequences.set(messageId, sequenceNumber);
            }
        }

        // Store the input in our result map
        const resultMap = this.results.get(messageId)!;
        resultMap.set(sequenceNumber, input.content);
    }
}
