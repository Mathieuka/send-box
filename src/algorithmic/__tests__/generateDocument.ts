import { generateDocument } from '../generateDocument';

describe('Generate document', () => {
    test('Empty document', () => {
        expect(generateDocument('', '')).toEqual(true);
    });

    test('Can generate the document', () => {
        expect(generateDocument('a', 'a')).toEqual(true);
        expect(generateDocument('ab', 'a')).toEqual(true);
        expect(generateDocument('!th ma ieu', ' mathieu! ')).toEqual(true);
    });
});
