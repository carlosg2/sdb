import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
  try {
    const fetchProducts = async () => {   
      const url = `https://www.extrapos.mx/pollos/GetSucursales.php`;
      const productRes = await fetch(url)
      const productData = await productRes.json()
      return productData
    }

    return {
      tienda: fetchProducts(),
      slug: params.slug
      
    }
  } catch (err) {
    throw error(404, err.message)
  }
}