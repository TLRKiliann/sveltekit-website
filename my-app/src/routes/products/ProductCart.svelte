<script lang="ts">
	import { goto, preloadCode } from '$app/navigation'
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../cart.ts';
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

{#if cartProduct !== undefined}
	<h2>{cartProduct.quantity}</h2>
{/if}

<div class="third--div">
	<a href={`/products/${product.id}`} class="class--a">
		{product.name}
	</a> 
	<p>Price : {product.price}</p>



	<button class="btn--add" on:click={() => addToCart(product.id)}>
		Add
	</button>
	
	<button class="btn--remove" on:click={() => removeFromCart(product.id)}>
		Remove
	</button>


	/*<button class="sec--btn"
		on:focus={async () => {
			await preloadCode(`/products/${product.id}`) 
		}}
		on:mouseover={async () => {
			await preloadCode(`/products/${product.id}`)
		}}
		on:click={() => goto(`/products/${product.id}`)}
	>
		Click
	</button>*/

</div>

<style>
	.third--div {
		padding: 15px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #ccc;
		border-radius: 7px;
		box-shadow: 0px 0px 10px #ccc;
	}
	.third--div p {
		margin: auto;
		margin-top: 7px;
		font-size: 1.1rem;
		font-weight: bold;
	}
	.btn--add {
		background: red;
	}
	.btn--remove {
		background: red;
	}
	.class--a {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
		color: steelblue;
	}
	.sec--btn {
		padding: 5px 20px;
		margin-top: 10px;
		font-size: 1.0rem;
		font-weight: bold;
		color: whitesmoke;
		background: steelblue;
		border: 1px solid steelblue;
		border-radius: 7px;
		cursor: pointer;
	}
</style>