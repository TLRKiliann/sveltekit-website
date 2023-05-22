<script lang="ts">
	import { goto } from '$app/navigation'
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../routes/cart.ts';
	
	export let product: Product = {id: '', name: '', price: 0};
	
	let cart = get(cartItems);
	console.log(product)

	let cartItemIndex = cart.findIndex((item) => { return item.id === product.id })
	let cartProduct = cart[cartItemIndex];
	
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => { return item.id === product.id })
		cartProduct = cart[cartItemIndex];
	})
</script>

<div class="third--div">
	{#if cartProduct !== undefined}
		<h2>{cartProduct.quantity}</h2>
	{/if}

	<a href={`/products/${product.id}`} class="class--a">
		{product.name}
	</a> 
	
	<p>Price : {product.price}</p>


	<div class="div--btn">
		<button class="btn--add" on:click={() => addToCart(product.id)}>
			Add
		</button>
		
		<button class="btn--remove" on:click={() => removeFromCart(product.id)}>
			Remove
		</button>
	</div>
</div>

<style>
	.third--div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid #ccc;
		border-radius: 7px;
		box-shadow: 0px 0px 10px #ccc;
		padding: 20px 20px;
	}
	.third--div a {
		margin: auto;
	}
	.third--div p {
		margin: auto;
		margin-top: 7px;
		font-size: 1.1rem;
		font-weight: bold;
	}
	.div--btn {
		margin: auto;
		margin-top: 10px;
	}
	.btn--add {
		margin: 0px 5px;
		padding: 5px 10px;
		background: aquamarine;
		border: 1px solid aquamarine;
		border-radius: 7px;
		color: red;
	}
	.btn--remove {
		margin: 0px 5px;
		padding: 5px 10px;
		background: orangered;
		border: 1px solid orangered;
		border-radius: 7px;
		color: #f8f8ff;
	}
	.class--a {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
		color: steelblue;
	}
</style>