import { get, writable } from "svelte/store";

const store = writable(new Map());
export const locationCacheStore = {
  has: (key) => get(store).has(key),
  get: (key) => get(store).get(key),
  set: (key, value) => store.update((map) => map.set(key, value)),
  listAll: () => {
    const cacheMap = get(store);
    const keys = [...cacheMap.keys()];
    const values = [...cacheMap.values()];
    return keys.map((key, index) => ({ key, value: values[index] }));
  }
};