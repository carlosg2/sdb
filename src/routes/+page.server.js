import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
  try {
    const fetchProducts = async () => {   
      const url = `https://www.extrapos.mx/pollos/GetSucursales.php`;
      const productRes = await fetch(url)
      const productData = await productRes.json()
      return productData.sucursales
    }

    return {
      sucursales: fetchProducts(),
      slug: params.slug
      ip: event.getClientAddress(),
		city: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-city'))),
        country: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-country'))),
        region: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-country-region'))),
        latitude: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-latitude'))),
        longitude: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-longitude'))),
        timezone: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-timezone')))
      
    }
  } catch (err) {
    throw error(404, err.message)
  }
}