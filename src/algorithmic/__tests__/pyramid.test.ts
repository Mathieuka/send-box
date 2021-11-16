import { pyramid } from '../pyramid';

describe('pyramid', () => {
    test('should render the pyramid', () => {
        // eslint-disable-next-line no-useless-concat
        expect(pyramid(3)).toEqual('  #  \n' + ' ### \n' + '#####');
    });
});
