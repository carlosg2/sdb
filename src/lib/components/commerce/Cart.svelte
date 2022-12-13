<script>
import { fade, fly, scale, slide } from "svelte/transition";
import { flip } from "svelte/animate";
import { expoOut } from "svelte/easing";
import { cart } from "./cart.js";
import CartIcon from "./CartIcon.svelte";
import CartLength from "@lib/components/commerce/CartLength.svelte";

function format(num) {
  return `$${num.toFixed(0)}`;
}

const plusItem = (product) => {
  for (let item of $cart) {
    if (item.id === product.id) {
      product.quantity += 1;
      $cart = $cart;
      return;
    }
  }
};

cart.update((prev) => {
  const toRemove = prev.findIndex((i) => i.id === id);
  return [...prev.slice(0, toRemove), ...prev.slice(toRemove + 1)];
});

const minusItem = (product) => {
  for (let item of $cart) {
    if (item.id === product.id) {
      if (product.quantity > 1) {
        product.quantity -= 1;
        $cart = $cart;
      } else {
        $cart = $cart.filter((cartItem) => cartItem != product);
      }
      return;
    }
  }
};

$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="w-full divide-y divide-y-[0.5px] divide-base-100 gap-4">
  {#if $cart.length === 0}
    <div
      class="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-white">
        <CartIcon type="cart" strokeColor="#000" />
      </div>
      <div class="mt-6 text-center text-lg ">
        Comienza tu pedido<br />agregando productos
      </div>
    </div>
  {:else}
    <!-- <CartLength /> -->

    {#each $cart as item, index (item)}
      <div
        class="py-6 flex font-heading"
        in:fade="{{ easing: expoOut }}"
        out:slide="{{ easing: expoOut }}"
        animate:flip="{{ easing: expoOut }}">
        <div class="indicator  flex-shrink-0 w-16 h-16">
          <div
            class="indicator-item  badge shadow badge-md badge-primary h-7 text-lg  font-bold">
            {item.quantity}
          </div>
          <img
            src="{item.image_url}"
            class="rounded-lg shadow w-full h-full object-center object-cover"
            alt="{item.title}" />
        </div>

        <div class="ml-4 flex-1 flex flex-col">
          <div class="flex justify-between font-medium">
            <h3 class="">
              {item.title}
            </h3>
            <p
              class="ml-4 text-sm md:text-base text-base-content tracking-wider font-semibold  tabular-nums">
              {format(item.price * item.quantity)}
            </p>
          </div>

          <div class="flex-1 mt-2  flex justify-between text-base">
            <p class="opacity-50">{item.title}</p>

            <div class="flex space-x-1 pl-4">
              <button
                class="btn btn-circle btn-sm bg-base-200"
                on:click="{() => minusItem(item)}">
                <CartIcon type="minus" strokeColor="#fff" />
              </button>
              <span class=" btn btn-circle btn-sm bg-base-100"
                >{item.quantity}</span>
              <button
                class="btn btn-circle btn-sm bg-base-200"
                on:click="{() => plusItem(item)}">
                <CartIcon type="plus" strokeColor="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- {/if} -->
    {/each}

    <div class="border-t border-base-100 py-6  tabular-nums">
      <div class="flex justify-between text-base font-medium">
        <p>Subtotal</p>
        <p>${total}</p>
      </div>

      <div class="flex justify-between text-base font-medium">
        <p>I.V.A.</p>
        <p class="tabular-nums">${total}</p>
      </div>

      <div class="flex justify-between text-base font-medium">
        <p>Total</p>
        <p class="tabular-nums">${total}</p>
      </div>

      <div class="mt-6 ">
        <a href="#_" class="btn btn-block btn-lg btn-primary">
          Realizar Pedido</a>
      </div>
    </div>
  {/if}
</div>

<!-- <style>
  .cart-list {
    border: 2px solid;
    padding: 10px;
  }
</style> -->
