type StorageDataType = { [key: string]: any };

export function getAllAsync() {
    return new Promise<StorageDataType>(
        (resolve, reject) => chrome.storage.sync.get(null, data => resolve(data))
    );
};
export function getAsync(key: string) {
    return new Promise(
        (resolve, reject) => chrome.storage.sync.get(key, data => resolve(data[key]))
    );
};
export function setAsync(key: string, data: any) {
    const toStore = {} as any;
    toStore[key] = data;
    return new Promise(
        (resolve, reject) => chrome.storage.sync.set(toStore, () => resolve())
    );
};