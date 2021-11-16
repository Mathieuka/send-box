import { MutableRefObject, useEffect, useRef, useState } from 'react';

const Home = (): JSX.Element => {
    const inputRef: MutableRefObject<any> = useRef(null);

    function handleClick() {
        inputRef?.current?.focus();
    }

    useEffect(() => {
        handleClick();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button type="button" onClick={handleClick}>
                Focus the input
            </button>
        </div>
    );
};

export default Home;
