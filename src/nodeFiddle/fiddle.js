const alert = 'We are ready, start the movie';

// Emulation of the demo (ad) reel.
const asyncFn = () => {
    setTimeout(() => {
        console.log('boom');
    }, 3000);
    return new Promise((resolve) => {
        const length = 900000000;
        let sum = 0;†

        for (let i = 0; i <= length; i += 1) {
            sum += i;
        }

        setTimeout(() => {
            resolve(sum);
        }, 3000);
    });
};

// setTimeout() function with anonymous callback†
// and delay in milliseconds.

setTimeout(() => {
    console.log(alert);
}, 4000);

(async () => {
    const res = await asyncFn();
    console.log('res', res);
})();
