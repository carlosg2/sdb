<script>
  import { products, cart } from './cart.js'

  const addToCart = product => {
    for (let item of $cart) {
      if (item.id === product.id) {
        product.quantity += 1
        $cart = $cart
        return
      }
    }
    product.quantity = 1;
    $cart = [...$cart, product]
  }
</script>

<div class="grid grid-cols-3">
  {#each $products as product}
    <div>
      <div
        class="image"
        style="background-image: url({product.image_url})"
      />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button class="btn btn-lg" on:click={() => addToCart(product)}
        >Add to cart</button
      >
    </div>
  {/each}
</div>

<style>
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .image {
    height: 150px;
    width: 150px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
