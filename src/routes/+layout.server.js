import { dev } from '$app/environment';
export const csr = dev;

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	return {
		ip: event.getClientAddress(),
		city: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-city'))),
        country: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-country'))),
        region: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-country-region'))),
        latitude: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-latitude'))),
        longitude: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-longitude'))),
        timezone: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-timezone')))
	};
}