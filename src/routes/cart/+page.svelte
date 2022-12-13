<script>
	let cart = [];
	let products = [
		{id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 10, quantity: 1},
		{id: 2, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1},
		{id: 3, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1},
	]
	
	let address = {
		name: "",
		email: "",
		phone: "",
		street: "",
		city: "",
		state: "",
		pin: "",
	}
	
	const addToCart = (product) => {
		for(let item of cart) {
				if(item.id === product.id) {
					product.quantity += 1
					cart = cart;
					return;
				}
		}
		cart = [...cart, product]
	}
	
	const minusItem = (product) => {
		for(let item of cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							cart = cart
					} else {
							cart = cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
			for(let item of cart) {
							if(item.id === product.id) {
								product.quantity += 1
								cart = cart;
								return;
							}
					}
	}

	
	
	$: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	
	const checkOut = () => {
		alert(JSON.stringify(cart))
		alert(JSON.stringify(address))
	}
	
</script>

<p>There are {cart.length} items in your cart</p>
<div class="product-list">
	{#each products as product}
	<div>
		<div class="image" style="background-image: url({product.image})"></div>
	<h4>{product.name}</h4>
	<p>₹{product.price}</p>
	<button on:click={() => addToCart(product)}>Add to cart</button>
	</div>
	{/each}
</div>

<div class="cart-list">
	{#each cart as item }
		{#if item.quantity > 0}
		<div class="cart-item">
			<img width="50" src={item.image} alt={item.name}/>
			<div>{item.quantity}
				<button on:click={() => plusItem(item)}>+</button>
				<button on:click={() => minusItem(item)}>-</button>
			</div>
			<p>₹{item.price * item.quantity}</p>
		</div>
		{/if}
	{/each}
	<div class="total">
		<h4>Total: ₹ {total}</h4>
	</div>
</div>

<div class="shipping-address">
	<div>
		<p>Name</p>
		<input bind:value={address.name} />

		<p>Email</p>
		<input bind:value={address.email} />

		<p>Phone</p>
		<input bind:value={address.phone} />

		<p>Address</p>
		<textarea bind:value={address.street} cols="24" rows="6"></textarea>

		<p>City</p>
		<input bind:value={address.city} />

		<p>State</p>
		<input bind:value={address.state} />

		<p>PIN</p>
		<input bind:value={address.pin} />
		
		<div>
			<button on:click={checkOut}>Checkout</button>
		</div>
		
	</div>
	
	<div class="current-address">
		<p>{address.name}</p>
		<p>{address.email}</p>
		<p>{address.phone}</p>
		<p>{address.street}</p>
		<p>{address.city}</p>
		<p>{address.state}</p>
		<p>{address.pin}</p>
	</div>
</div>


<style>
	.product-list, .cart-item {
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
	.total {
		text-align: right;
	}
	
	.cart-list {
		border: 2px solid;
		padding: 10px;
	}
	.shipping-address {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
	}
	.current-address {
		padding: 2em;
		border: 2px dashed green;
	}
</style>