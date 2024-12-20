import { useCallback, useState } from "react";

function useStoredState(initialValue, key) {
    let storedItemStr = localStorage.getItem(key);
    let storedItem = null;
    try {
        storedItem = JSON.parse(storedItemStr);
    } catch (error) { }

    const [value, setValue] = useState(storedItem ? storedItem : initialValue);

    const setValueAndStore = useCallback((newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }, [setValue]);

    return [value, setValueAndStore];
}
