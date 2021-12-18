import { useState } from 'react';

export const useIdle = (time: number) => {
    const [id, setId] = useState<NodeJS.Timeout | null>(null);

    const inactiveFn = () => {
        console.log('User is inactive');
    };

    const idInner = setTimeout(inactiveFn, time);

    async function resetTimer() {
        setId(idInner);
        console.log('[Process to be killed] ', idInner);
        clearTimeout(id as NodeJS.Timeout);
    }

    if (typeof window !== 'undefined') {
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeydown = resetTimer;
    }
    return { id };
};
