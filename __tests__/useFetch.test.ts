import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useFetch } from '../src/hooks/useFetch';

describe('useFetch', () => {
    test('Should fetch data', async () => {
        global.fetch = jest.fn(
            () =>
                Promise.resolve({
                    json: () => Promise.resolve({ data: 'fakeData' }),
                }) as Promise<Response>
        );

        const { result } = renderHook(() =>
            useFetch('https://jsonplaceholder.typicode.com/todos/1')
        );
        expect(result.current.isLoading).toEqual(true);
        await waitFor(() => null);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.responseJSON).toEqual({ data: 'fakeData' });
    });

    test('Should return error', async () => {
        global.fetch = jest.fn(() => {
            throw new Error('Error');
        });
        const { result } = renderHook(() =>
            useFetch('https://jsonplaceholder.typicode.com/todos/1')
        );
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.error).toEqual('Example Error');
    });
});
