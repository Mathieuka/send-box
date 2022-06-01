import { EventTarget } from '../eventTarget';

const eventTarget = new EventTarget();

describe('Implement Event target', () => {
    const clickCb = jest.fn();
    const secondClickCb = jest.fn();
    const keyDownCb = jest.fn();

    test('Add an event listener', () => {
        eventTarget.addEventListener('keydown', keyDownCb);
        eventTarget.addEventListener('click', clickCb);
        eventTarget.addEventListener('click', secondClickCb);
    });

    test('Dispatch an event', () => {
        eventTarget.dispatchEvent('click');
        eventTarget.dispatchEvent('keydown');

        expect(clickCb).toHaveBeenCalledTimes(1);
        expect(secondClickCb).toHaveBeenCalledTimes(1);
        expect(keyDownCb).toHaveBeenCalledTimes(1);
    });

    test('Remove event listener', () => {
        eventTarget.removeEventListener('click', clickCb);
        eventTarget.dispatchEvent('click');

        expect(secondClickCb).toHaveBeenCalledTimes(2);
        expect(clickCb).toHaveBeenCalledTimes(1);
    });
});
