import { writable, derived } from 'svelte/store';

const cart = writable([]);

export default {
	
	...cart,
	
	add: (item) => {
		cart.update((prev) => {
			prev.push(item);
			return prev;
		});
	},
	
	remove: (id) => {
		cart.update((prev) => {
			const toRemove = prev.findIndex((i) => i.id === id);
			return [...prev.slice(0, toRemove), ...prev.slice(toRemove + 1)];
		});
	}
};

export const totals = derived(cart, ($cart) => {
	let subtotal = 0;
	for (let cartItem of $cart) {
		const item = getItem(cartItem.id);
		subtotal += item.price * cartItem.quantity;
	}
	const tax = subtotal * 0.0975;
	return {
		subtotal: subtotal.toFixed(2),
		tax: tax.toFixed(2),
		total: (subtotal + tax).toFixed(2)
	};
});

export const items 
= [
	{
		title: 'COMBO SOMOSPOLLOS',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		description: "Combo Somos Pollos",
		id: 1
	},
	{
		title: 'COMBO BALON ORO',
		price: 89,
		image_url: 'https://pollos.extrapos.mx/pollos/img/704_producto_76.png',
		id: 2
	},
	{
		title: 'Spaghetti with Meat Sauce',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		id: 3
	},
	{
		title: 'Bacon and Eggs',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		id: 4
	},
	{
		title: 'Chicken Salad',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		id: 5
	},
	{
		title: 'Ravioli',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		id: 6
	},
	{
		title: 'Tortellini',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		id: 7
	},
	{
		title: 'Fish Sticks with Fries',
		price: 349,
		image_url: 'https://pollos.extrapos.mx/pollos/img/173_producto_80.png',
		id: 8
	}
];

function getItem(id) {
	return items.find((i) => i.id === id);
}