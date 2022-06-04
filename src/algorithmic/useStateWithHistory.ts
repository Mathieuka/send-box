import { useState } from 'react';

export const useStateWithHistory = (initialValue: number) => {
    const [history, setHistory] = useState([initialValue]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return {
        history,
        value: history[currentIndex],
        setValue: (value: number) => {
            setHistory([...history, value]);
            setCurrentIndex(history.length);
        },
        goBack: () => {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        },
        goForward: () => {
            if (currentIndex < history.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        },
    };
};
