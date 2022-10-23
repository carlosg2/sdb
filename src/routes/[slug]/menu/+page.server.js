import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
  try {
    const fetchProducts = async () => {   
      const productRes = await fetch('https://cloud.extrapos.mx/gogo/Menu.php?&mSucursalID=1')
      const productData = await productRes.json()
      return productData.Productos
    }

    return {
      products: fetchProducts(),
      slug: params.slug
    }
  } catch (err) {
    throw error(404, err.message)
  }
}