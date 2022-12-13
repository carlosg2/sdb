<script>
	import {cart} from "./cart.js";
</script>

<p>There are <strong>{$cart.length}</strong> types of items in your cart</p>
<p>Total items
	<strong>{$cart.reduce((sum, item) => sum + item.quantity, 0)}</strong>
</p>