<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
    import cart from './cart';
	import CartIcon from './CartIcon.svelte';
	export let item;
	export let quantity;

	$: if (quantity === 0) {
		// todo: focus management
		cart.remove(item.id);
	}

	import { createEventDispatcher } from 'svelte';
    import { expoOut } from 'svelte/easing'
	const dispatch = createEventDispatcher();

	function format(num) {
		return `$${num.toFixed(0)}`;
	}

	function inc() {
		dispatch('update', quantity + 1);
	}

	function dec() {
		dispatch('update', quantity - 1);
	}


</script>

<!-- <div class="item text-base-content">
	<div class="details">
		<div class="name">{item.title}</div>
		<div class="price">{format(item.price)}</div>
		<div class="adjust">
			<div class="quantity">
				<button on:click={dec}
					><span>
                        <img src="/images/day2/chevron.svg" alt="decrease" />
                    </span></button
				>
				<span>{quantity}</span>
				<button on:click={inc}
					><span>
                        <img src="/images/day2/chevron.svg" alt="increase" />
                    </span></button
				>
			</div>
			<div class="total">{format(item.price * quantity)}</div>
		</div>
	</div>
	<div class="cart-image">
		<img src="{item.image_url}" alt="" />
		<div aria-hidden="true" class="overlay">{quantity}</div>
	</div>
</div> -->

<!--  -->

    <li class="py-6 flex font-heading" in:fade={{easing: expoOut}} out:slide={{easing: expoOut}} >
        <div class="indicator  flex-shrink-0 w-16 h-16">
            <div class="indicator-item  badge shadow badge-md badge-primary h-7 text-lg  font-bold">{quantity}</div>
            <img src="{item.image_url}" class="rounded-lg shadow w-full h-full object-center object-cover" alt="{item.title}" >
        </div>

        <div class="ml-4 flex-1 flex flex-col">

            <div class="flex justify-between font-medium">
                <h3 class="">
					{item.title}
                </h3>
                <p class="ml-4 text-sm md:text-base text-base-content tracking-wider font-semibold  tabular-nums">
                    {format(item.price * quantity)}
                </p>
            </div>

            <div class="flex-1 mt-2  flex justify-between text-base">
                <p class="opacity-50">{item.description}</p>

                <!-- <p class="">Qty 1</p> -->
                <div class="flex space-x-1 pl-4">
                    <button class="btn btn-circle btn-sm bg-base-200 " on:click={dec}>
						<CartIcon type="minus" strokeColor="#fff" />
                    </button>
					<span class=" btn btn-circle btn-sm bg-base-100">{quantity}</span>
					<button class="btn btn-circle btn-sm bg-base-200" on:click={inc}>
						<CartIcon type="plus" strokeColor="#fff" />
					</button>
                </div>
            </div>
        </div>
    </li>



