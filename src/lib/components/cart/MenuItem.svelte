<script>
	import cart from "./cart";
  import CartIcon from './CartIcon.svelte';
	export let item;

	$: itemInCart = $cart.find((i) => i.id === item.id) !== undefined;

  $: itemIndex = $cart.findIndex((i) => i.id === item.id);

	function addToCart() {
		cart.add({ id: item.id, quantity: 1 });
	}


    import { createEventDispatcher } from 'svelte';
    import { expoOut } from 'svelte/easing'
	const dispatch = createEventDispatcher();

	function format(num) {
		return `$${num.toFixed(2)}`;
	}

	function inc() {
		$cart[itemIndex].quantity++;
	}

	function dec() {
		$cart[itemIndex].quantity--;
	}






</script>

<div 
    class="text-base-content flex px-4 items-start  border-[0.5px] border-base-300 bg-base-100 rounded-box " >

    <div class=" w-full relative space-y-1 py-4">
      
      <div class="flex justify-between items-center ">
        <div class="shrink text-base-content tracking-wide font-bold font-display text-lg leading-5 pb-1 ">
          {item.title}
          
        </div>
      </div>

      <div class="text-sm md:text-base line-clamp-2 tracking-wider leading-4 opacity-50">
        {item.description}
      </div>

      <div class="text-sm md:text-base text-base-content tracking-wider font-semibold flex items-center  tabular-nums opacity-50" >
        ${item.price.toFixed(0)}
      </div>

      

      
        {#if itemInCart}
            <!-- <img src="/images/day2/check.svg" alt="" /> -->
            <!-- <div class="btn">Agregado</div> -->

            
            <div class="flex space-x-1">
                <button class="btn btn-circle btn-sm" on:click|stopPropagation={dec}><span>
                  <CartIcon type="minus" strokeColor="#fff" />
                </span></button>
                <button class="btn btn-circle btn-sm" on:click|stopPropagation={inc} ><span>
                  <CartIcon type="plus" strokeColor="#fff" />
                </span></button>
            </div>

        {:else}
        <button class=" btn btn-sm" class:btn-primary={!itemInCart} on:click|stopPropagation={addToCart}>
            Agregar
        </button>
        {/if}

      
      

    </div>

    {#if item.image_url}

      <div class="ml-4 shrink-0  py-4">
        <img data-id={item.id}
          class="rounded-md w-20 h-20 md:h-28 md:w-28 object-center object-cover"  
          src="{item.image_url}"
          alt="demo"
        />
      </div>
      
    {/if}

    
</div>

		


