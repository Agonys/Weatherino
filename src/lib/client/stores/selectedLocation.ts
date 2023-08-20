import { writable, type Writable } from 'svelte/store';
import type { LocationData } from '$lib/server/stores/locationCacheStore';

export const selectedLocation: Writable<LocationData> = writable({} as LocationData);