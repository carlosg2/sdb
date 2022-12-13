<style>
.shipping-address {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 1em;
}
/* .current-address {
		padding: 2em;
		border: 2px dashed green;
	} */
</style>

<script>
import { cart, address } from "./cart.js";

const checkOut = () => {
  alert(JSON.stringify($cart));
  alert(JSON.stringify($address));
};
</script>

<div class="shipping-address">
  <div>
    <input
      class="input input-bordered w-full max-w-xs"
      placeholder="Nombre"
      bind:value="{$address.name}" />

    <input
      class="input input-bordered w-full max-w-xs"
      placeholder="Email"
      bind:value="{$address.email}" />

    <input
      class="input input-bordered w-full max-w-xs"
      placeholder="Teléfono"
      bind:value="{$address.phone}" />

    <textarea
      class="textarea textarea-bordered w-full max-w-xs"
      placeholder="Dirección"
      bind:value="{$address.street}"
      cols="24"
      rows="1"></textarea>

    <input
      class="input input-bordered w-full max-w-xs"
      placeholder="Ciudad"
      bind:value="{$address.city}" />

    <input
      class="input input-bordered w-full max-w-xs"
      placeholder="Estado"
      bind:value="{$address.state}" />

    <input
      class="input input-bordered w-full max-w-xs"
      placeholder="Código Postal"
      bind:value="{$address.pin}" />

    <div>
      <button class="btn" on:click="{checkOut}">Ordenar</button>
    </div>
  </div>

  <!-- <div class="current-address">
		<p>{$address.name}</p>
		<p>{$address.email}</p>
		<p>{$address.phone}</p>
		<p>{$address.street}</p>
		<p>{$address.city}</p>
		<p>{$address.state}</p>
		<p>{$address.pin}</p>
	</div> -->
</div>
