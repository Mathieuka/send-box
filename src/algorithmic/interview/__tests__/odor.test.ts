// eslint-disable-next-line import/namespace
import { computeAllergicListItems } from '../odor';

describe('Compute allergic list items', () => {
    test('Score 0', () => {
        expect(computeAllergicListItems(0)).toEqual({
            isAllergic: false,
            items: [],
        });
    });
});
