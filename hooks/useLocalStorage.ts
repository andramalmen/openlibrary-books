import * as React from 'react';

const useLocalStorage = (key: string, value: string) => {
    const [state, setState] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const valueInLocalStorage = window.localStorage.getItem(key);
            if (valueInLocalStorage) {
                return JSON.parse(valueInLocalStorage);
            }
            return value;
        }
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
};

export default useLocalStorage;
