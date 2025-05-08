import { Input } from './__tests__/inputs';

interface IStream {
    streamProcess: (input: Input[]) => string;
}

export class Stream implements IStream {
    private buffer: Map<number, Input> = new Map();

    private nextExpectedSequence = 0;

    private result: string[] = [];

    public streamProcess(inputs: Input[]): string {
        if (inputs.length === 0) {
            return '';
        }

        // Reset state for this processing run
        this.buffer = new Map();
        this.nextExpectedSequence = 0;
        this.result = [];

        // Process each input as if it was received in a stream
        for (const input of inputs) {
            this.processInput(input);
        }

        // Return the current result
        return this.result.join(' ');
    }

    private processInput(input: Input): void {
        // Store the input in our buffer
        this.buffer.set(input.sequence_number, input);

        // Process any inputs that are now ready (in sequence)
        this.processBuffer();
    }

    private processBuffer(): void {
        // Process inputs in sequence as long as we have the next expected one
        while (this.buffer.has(this.nextExpectedSequence)) {
            const input = this.buffer.get(this.nextExpectedSequence)!;

            // Add the content to our result
            this.result.push(input.content);

            // Remove the processed input from the buffer
            this.buffer.delete(this.nextExpectedSequence);

            // Increment the next expected sequence number
            this.nextExpectedSequence++;
        }
    }
}
