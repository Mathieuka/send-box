import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import { useStateWithHistory } from '../useStateWithHistory';

const initialValue = 1;

test('UseStateWithHistory', () => {
    const { result } = renderHook(() => useStateWithHistory(initialValue));
    expect(result.current.value).toEqual(1);
    expect(result.current.history).toEqual([1]);

    // go back to the previous value without previous value have no effect
    act(() => {
        result.current.goBack();
    });
    expect(result.current.value).toEqual(1);
    expect(result.current.history).toEqual([1]);

    // go back to the next value without next value have no effect
    act(() => {
        result.current.goForward();
    });
    expect(result.current.value).toEqual(1);
    expect(result.current.history).toEqual([1]);

    // add a value and update the current value with it
    act(() => {
        result.current.setValue(2);
    });
    expect(result.current.value).toEqual(2);
    expect(result.current.history).toEqual([1, 2]);

    act(() => {
        result.current.setValue(3);
    });
    expect(result.current.value).toEqual(3);
    expect(result.current.history).toEqual([1, 2, 3]);

    // go back to the previous value update the current value
    act(() => {
        result.current.goBack();
    });
    expect(result.current.value).toEqual(2);
    expect(result.current.history).toEqual([1, 2, 3]);

    // go to the next value update the current value
    act(() => {
        result.current.goForward();
    });
    expect(result.current.value).toEqual(3);
    expect(result.current.history).toEqual([1, 2, 3]);
});
