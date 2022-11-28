import { writable, derived } from 'svelte/store';

const cart = writable([]);
// const items = writable([]);

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
		"id": 1,
		"title": "Área Chica",
		"description": "1 Pierna, 1 Muslo, 1 Puré",
		"price": 49,
		"image_url": "/assets/images/areachica.png"
	 },
	 {
		"id": 2,
		"title": "Balón de Oro",
		"description": "1 Pierna, 1 Muslo, 1 Fajita, 1 Puré, 1 Panecillo",
		"price": 89,
		"image_url": "/assets/images/balondeoro.png"
	 },
	 {
		"id": 3,
		"title": "Fuera de Lugar",
		"description": "2 Fajita, 1 Puré, 1 Aderezo, 1 Panecillo",
		"price": 99,
		"image_url": "/assets/images/fueradelugar.png"
	 },
	 {
		"id": 4,
		"title": "Contra Golpe",
		"description": "8 Piezas (Piernas y Muslos)",
		"price": 119,
		"image_url": "/assets/images/contragolpe.png"
	 },
	 {
		"id": 5,
		"title": "Gol Olimpico",
		"description": "2 Piernas, 2 Muslos, 4 Fajitas, 2 Panecillos, 2 Aderezos",
		"price": 249,
		"image_url": "/assets/images/gololimpico.png"
	 },
	 {
		"id": 6,
		"title": "Penalty",
		"description": "12 Piezas (Pierna y Muslo), 4 Pures y 4 Panecillos",
		"price": 259,
		"image_url": "/assets/images/penalty.png"
	 },
	 {
		"id": 7,
		"title": "Somos Pollos",
		"description": "3 Piernas, 3 Muslos, 6 fajitas, 4 Panecillos, 3 Aderezos",
		"price": 349,
		"image_url": "/assets/images/somospollos.png"
	 }
];

function getItem(id) {
	return items.find((i) => i.id === id);
}

function getIndex(id) {
	return items.findIndex((i) => i.id === id);
}