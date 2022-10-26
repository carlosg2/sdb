
// /** @type {import('./$types').PageServerLoad} */
// export function load(event) {
// 	return {
// 		city: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-city'))),
//         country: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-country'))),
//         region: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-country-region'))),
//         latitude: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-latitude'))),
//         longitude: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-longitude'))),
//         timezone: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-timezone')))
// 	};
// } 

import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params, event }) => {
  try {
    const fetchSucursales = async () => {   
      const url = `https://pollos.extrapos.mx/pollos/GetSucursales.php`;
      const res = await fetch(url)
      const data = await res.json()
      return data.sucursales
    }

    return {
      sucursales: fetchSucursales(),
      slug: params.slug,
      
    }
  } catch (err) {
    throw error(404, err.message)
  }
}