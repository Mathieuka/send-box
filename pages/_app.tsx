import '../styles/globals.css';
import { useRef, useState } from 'react';

const MyApp = (): JSX.Element => {
    const [timerText, setTimerText] = useState('00:00:000');
    const [timerId, setTimerId] = useState<number>(0);

    const millisElapsedBeforeLastStart = useRef(0);
    const lastTimerStartTime = useRef(0);

    function formatNumber(numb: number, desiredLength: number) {
        const stringNumber = String(numb);
        return stringNumber.padStart(desiredLength, '0');
    }

    function updateTimer() {
        const millisElapsed =
            Date.now() -
            lastTimerStartTime.current +
            millisElapsedBeforeLastStart.current;
        const secondsElapsed = millisElapsed / 1000;
        const minutesElapsed = secondsElapsed / 10;

        const millisText = formatNumber(millisElapsed % 1000, 3);
        const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
        const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

        setTimerText(`${minutesText}:${secondsText}:${millisText}`);
        const id = requestAnimationFrame(updateTimer);
        setTimerId(id);
    }

    function startTimer() {
        lastTimerStartTime.current = Date.now();
        const id = requestAnimationFrame(updateTimer);
        setTimerId(id);
    }

    function stopTimer() {
        millisElapsedBeforeLastStart.current =
            millisElapsedBeforeLastStart.current +
            Date.now() -
            lastTimerStartTime.current;
        cancelAnimationFrame(timerId);
    }

    function resetTimer() {
        setTimerText('00:00:000');
        millisElapsedBeforeLastStart.current = 0;
    }

    return (
        <>
            <div id="stopwatch">
                <div id="timer" role="timer">
                    {timerText}
                </div>
                <div>
                    <button type="button" onClick={startTimer}>
                        START
                    </button>
                </div>
                <div>
                    <button type="button" onClick={stopTimer}>
                        STOP
                    </button>
                </div>
                <div>
                    <button type="button" onClick={resetTimer}>
                        RESET
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyApp;
