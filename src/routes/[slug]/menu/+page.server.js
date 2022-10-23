import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
  try {
    const fetchProducts = async () => {   
      const productRes = await fetch('https://www.extrapos.mx/pollos/GetProductosMenu.php?cliente_id=0&tipoVentaID=2}')
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