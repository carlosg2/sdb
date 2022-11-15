<script>
	import cart from "./cart";
	export let item;

	$: itemInCart = $cart.find((i) => i.id === item.id) !== undefined;

	function addToCart() {
		cart.add({ id: item.id, quantity: 1 });
	}
</script>

<div on:click={() => selected = item}
    class="text-base-content flex px-4 items-start  border-[0.5px] border-base-300 bg-base-100 rounded-box " >

    <div class=" w-full relative space-y-1 py-4">
      
      <div class="flex justify-between items-center ">
        <div class="shrink text-base-content tracking-wide font-bold font-display text-lg leading-5 pb-1 capitalize">
          {item.title}
          
        </div>
      </div>

      <div class="text-sm md:text-base line-clamp-2 tracking-wider leading-4 opacity-50">
        {item.description}
      </div>

      <div class="text-sm md:text-base text-base-content tracking-wider font-semibold flex items-center  tabular-nums opacity-50" >
        ${item.price.toFixed(2)}
      </div>

      <button class=" btn" class:btn-primary={!itemInCart} on:click={addToCart}>
        {#if itemInCart}
            <!-- <img src="/images/day2/check.svg" alt="" /> -->
            <span>Agregado</span>
        {:else}
            Agregar
        {/if}
    </button>
      
      

    </div>

    {#if item.image_url}

      <div class="ml-4 shrink-0  py-4">
        <img data-id={item.id}
          class="rounded-md w-20 h-20 md:h-28 md:w-28"  
          src="{item.image_url}"
          alt="demo"
        />
      </div>
      
    {/if}

    
</div>

		


