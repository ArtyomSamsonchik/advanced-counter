export function getFromStorage<T>(key: string, initData: T): T {
    const dataAsString = localStorage.getItem(key);
    return dataAsString ? JSON.parse(dataAsString) as T : initData;
}

export function saveToStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
}