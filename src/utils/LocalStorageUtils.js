export const getTokenFromLocalStorage = (key) => {
    try {
        const token = localStorage.getItem(key);
        return JSON.parse(token);
    } catch (e) {
        return false;
    }
}

export const setTokenToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        return false;
    }
}
