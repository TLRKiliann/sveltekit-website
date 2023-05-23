import { writable, get } from 'svelte/store';

export const cartItems = writable<CartItem[]>([])

export const addToCart = (id: string, name: string, price: number) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex(
		(item) => { return item.id === id }
	)
	if (itemPosition !== -1) {
		//item is already in the cart
		cartItems.update(() => {
			let updateItems = items.map((item) => {
				if (item.id === id) {
					return {...item, quantity: item.quantity + 1}			
				}
				return item;
			})
			return updateItems;
		});
	} else {
		//item in not already in the cart
		cartItems.update(() => {
			return [...items, { id: id, name: name, price: price, quantity: 1 }]
		})
	}
}

export const removeFromCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex((item) => { return item.id === id })
	if(items[itemPosition]?.quantity - 1 === 0) {
		items.splice(itemPosition, 1);
	}
	if (itemPosition !== -1) {
		//item is in the cart
		cartItems.update(() => {
			let updateItems = items.map((item) => {
				if (item.id === id) {
					return {...item, quantity: item.quantity - 1}
				}
				return item;
			})
			return updateItems;
		})
	}
}
