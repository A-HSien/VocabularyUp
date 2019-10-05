export function getAllAsync() {
    return new Promise(
        (resolve, reject) => chrome.storage.sync.get(null, data => resolve(data))
    );
};
export function getAsync(key) {
    return new Promise(
        (resolve, reject) => chrome.storage.sync.get(key, data => resolve(data[key]))
    );
};
export function setAsync(key, data) {
    const toStore = {};
    toStore[key] = data;
    return new Promise(
        (resolve, reject) => chrome.storage.sync.set(toStore, () => resolve())
    );
};