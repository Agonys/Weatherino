import { error, json } from '@sveltejs/kit';
import { locationCacheStore, type LocationData } from '$lib/server/stores/locationCacheStore';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	throw error(401, 'Unauthorized');
};
export const POST: RequestHandler = async ({ request, fetch }) => {
	const params = await request.json();
	const query = params.query.toLowerCase();
	const language = params.language.toLowerCase();

	if (!query) {
		throw error(400, 'Missing query string');
	}

	if (locationCacheStore.has(query)) {
		console.log('POST api/v1/locations: using cached data.\n', JSON.stringify({ query, language }, null, 2));
		return json(locationCacheStore.get(query));
	}

	const apiData = await fetch(
		`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=${language}&format=json`
	);
	const data = await apiData.json();
	const formattedData =
		data.results?.map((location: LocationData) => {
			const { name, id, latitude, longitude, country } = location;
			return { id, name, country, latitude, longitude } as LocationData;
		}) || [];

	console.log('POST api/v1/locations: using external API.\n', JSON.stringify({ query, language }, null, 2));
	locationCacheStore.set(query, formattedData);
	return json(formattedData);
}
