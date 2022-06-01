type tCallBack = <T>(...args: T[]) => unknown;

export class EventTarget {
    listeners: { [key: string]: Set<tCallBack> };

    constructor() {
        this.listeners = {};
    }

    addEventListener(name: string, callback: tCallBack) {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.listeners.hasOwnProperty(name)) {
            this.listeners[name] = new Set([callback]);
        } else {
            this.listeners[name].add(callback);
        }
    }

    removeEventListener(name: string, callback: any) {
        this.listeners[name]?.delete(callback);
    }

    dispatchEvent = (name: string) => {
        this.listeners[name]?.forEach((cb: any) => cb());
    };
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
