<script lang="ts">
	import { goto, preloadCode } from '$app/navigation'
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

<div class="div--encaps">
	<div class="third--div">
		<div class="displayer--quantitiy">
			{#if cartProduct !== undefined}
				<h2>{cartProduct.quantity}</h2>
			{/if}
		</div>

		<a href={`/products/${product.id}`} class="class--a">
			{product.name}
		</a> 
		
		<p>Price : {product.price}</p>


		<div class="div--btn">
			<button class="btn--add" on:click={() => addToCart(product.id)}>
				+
			</button>
			
			<button class="btn--remove" on:click={() => removeFromCart(product.id)}>
				-
			</button>
		</div>

		<div class="div--btn">
			<button class="btn--display"

				on:focus={async () => {
					await preloadCode(`/products/${product.id}`) 
				}}
				on:mouseover={async () => {
					await preloadCode(`/products/${product.id}`)
				}}
				on:click={() => goto(`/products/${product.id}`)}
		
			>
				Display product
			</button>
		</div>
	</div>
</div>

<style>
	.div--encaps {
		height: auto;
		margin: 10px 10px;
		padding: 12px 12px;
		background: #333;
		border-radius: 7px;
		box-shadow: 0px 0px 10px #000;
	}
	.third--div {
		height: 160px;
		padding: 20px 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0, lightblue);
		border-radius: 7px;
		box-shadow: 0px 0px 10px lightblue;
	}
	.displayer--quantitiy h2 {
		margin: auto 60px;
		padding: 10px 10px;
		text-align: center;
		background: #ccc;
		border-radius: 7px;
		color: slateblue;
	}
	.third--div a {
		margin: auto;
		margin-top: 10px;
	}
	.class--a {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
		color: dodgerblue;
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
		font-weight: bold;
		background: slateblue;
		border: 1px solid slateblue;
		border-radius: 7px;
		color: #fff;
	}
	.btn--add:hover {
		background: indigo;
		border: 1px solid indigo;
		color: #f8f8ff;
	}
	.btn--add:active {
		background: indigo;
		border: 1px solid #f8f8ff;
		color: #f8f8ff;
	}
	.btn--remove {
		margin: 0px 5px;
		padding: 5px 10px;
		font-weight: bold;
		background: orangered;
		border: 1px solid orangered;
		border-radius: 7px;
		color: #f8f8ff;
	}
	.btn--remove:hover {
		margin: 0px 5px;
		padding: 5px 10px;
		background: red;
		border: 1px solid red;
		border-radius: 7px;
		color: #f8f8ff;
	}
	.btn--remove:active {
		background: red;
		border: 1px solid #f8f8ff;
		color: #f8f8ff;
	}
	.btn--display {
		margin: 0px 5px;
		padding: 5px 10px;
		font-weight: bold;
		background: dodgerblue;
		border: 1px solid dodgerblue;
		border-radius: 7px;
		color: #f8f8ff;
	}
	.btn--display:hover {
		background: royalblue;
		border: 1px solid royalblue;
		color: #f8f8ff;
	}
	.btn--display:active {
		background: royalblue;
		border: 1px solid #f8f8ff;
		color: #f8f8ff;
	}
</style>