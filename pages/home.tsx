function debounce(
    callback: (arg: unknown) => unknown,
    delay: number,
    immediate = false
) {
    let timeoutID: NodeJS.Timeout | null = null;
    return (...args: any) => {
        if (timeoutID === null && immediate) {
            callback(args);
        }
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            if (!immediate) {
                callback(args);
            }
            timeoutID = null;
        }, delay);
    };
}

const Home = () => {
    const myFunction = (arg: any) => {
        console.log(arg[0]);
    };
    const debouncedFunction = debounce(myFunction, 2000, true);

    return (
        <div>
            <button type="button" onClick={() => debouncedFunction('Clicked')}>
                Button
            </button>
        </div>
    );
};

export default Home;
