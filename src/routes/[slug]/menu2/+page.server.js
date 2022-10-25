import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }) => {
  try {
    const fetchProducts = async () => {   
      const url = `https://www.extrapos.mx/pollos/Menu.php?&mSucursalID=${params.slug}`;
      const productRes = await fetch(url)
      const productData = await productRes.json()
      return productData
    }

    return {
      tienda: fetchProducts()
      
      
    }
  } catch (err) {
    throw error(404, err.message)
  }
}