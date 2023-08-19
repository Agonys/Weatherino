import { get, writable, type Writable } from 'svelte/store';

export interface LocationData {
	id: string;
	name: string;
	country: string;
	latitude: number;
	longitude: number;
}

const store: Writable<Map<string, LocationData>> = writable(new Map());
export const locationCacheStore = {
  has: (key: string) => get(store).has(key),
  get: (key: string) => get(store).get(key),
  set: (key: string, value: LocationData) => store.update((map) => map.set(key, value)),
  listAll: () => {
    const cacheMap = get(store);
    const keys = [...cacheMap.keys()];
    const values = [...cacheMap.values()];
    return keys.map((key, index) => ({ key, value: values[index] }));
  }
};