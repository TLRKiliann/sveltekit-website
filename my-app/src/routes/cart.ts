import { writable, get } from 'svelte/store';

export const cartItems = writable<CartItem[]>([])

export const addToCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex(
		(item) => { return item.id === id }
	)
	if (itemPosition !== -1) {
		//item is in the cart
		let updateItems = items.map((item) => {
			if(item.id === id) {
				return {...item, quantity: item.quantity + 1}			
			}
			return item;
		})
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }]
		})
	} else {
		//item in not in the cart
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }]
		})
	}
}

export const removeFromCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex(
		(item) => { return item.id === id }
	)
	if(items[itemPosition]?.quantity - 1 === 0) {
		items.splice(itemPosition, 1);
	}
	if (itemPosition !== -1) {
		//item is in the cart
		let updateItems = items.map((item) => {
			if(item.id === id) {
				return {...item, quantity: item.quantity - 1}			
			}
			return item;
		})
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }]
		})
	}
}
