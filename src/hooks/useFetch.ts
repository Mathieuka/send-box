import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [responseJSON, setResponseJSON] = useState<null | string>(null);
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const controller = new AbortController();

    const fetchData = async () => {
        try {
            setIsLoading(() => true);
            const response = await fetch(url);
            const json = await response.json();
            setResponseJSON(() => json);
            setError(() => null);
            setIsLoading(() => false);
        } catch (e: unknown) {
            setError(() => 'Example Error');
            setResponseJSON(() => null);
            setIsLoading(() => false);
        }
    };

    useEffect(() => {
        fetchData();
        return () => {
            controller.abort();
        };
    }, [url]);

    return { responseJSON, error, isLoading };
};
