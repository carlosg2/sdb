import { writable, derived } from 'svelte/store';


export const productitems = writable ([]);



export const name = writable('world');

export const greeting = derived(
	name,
	$name => `Hello ${$name}!`
);