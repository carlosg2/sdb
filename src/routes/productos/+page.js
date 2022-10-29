// export const prerender = true

// export async function load({ fetch }) {
//   const res = await fetch('/sucursales.json')
//   if (res.ok) {
//     const { posts } = await res.json()
//     return { posts }
//   }
// }

// export const load = async ({ fetch }) => {

//   return {
//     Product: 'iPhone 15'
//   }
// } 


export const load = async ({ fetch }) => {

  const fetchProducts = async () => {   
      const productRes = await fetch('https://pollos.extrapos.mx/pollos/GetProductosMenu.php?cliente_id=0&tipoVentaID=1')
      const productData = await productRes.json()
      return productData.Productos
  }

  return {
     products: fetchProducts(),
  }
}