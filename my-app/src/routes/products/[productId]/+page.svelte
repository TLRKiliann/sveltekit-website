<script lang="ts">
	import { cartItems, removeFromCart } from '../../cart.ts';
	import { get } from 'svelte/store';

	export let data;
	const product: Product[] = data.product;

	let totalCarts = get(cartItems);
	console.log(totalCarts, "total");

	let allQuantity = totalCarts.reduce((a, c) => a + c.quantity, 0);

	let allQuantityProducts = totalCarts.map((tot) => tot)
	console.log(allQuantityProducts, "quantity prod")

	let allPrices = totalCarts.reduce((a, c) => a + (c.price * c.quantity), 0);

</script>

<div class="main--div">
	<div class="div--encaps">
		<div class="div--allmerchants">
			<h2>Total of products : {allQuantity}x</h2>
			<h3>Product name: {product.name}</h3>
			<h3>Price : {product.price}.- CHF</h3>
			<h3>Description : {product.description}</h3>
		</div>
	</div>
	<div class="div--encaps">
		<div class="class--other">
			{#each allQuantityProducts as other}
				<p class="p--name"><span>Name of product</span> : {other.name}</p>
				<p class="p--quantity"><span>Quantity</span> : {other.quantity}x</p>
				<p class="p--price"><span>Price</span> : {other.price}.- CHF</p>
				<hr />
			{/each}
			<h2 class="class--total">Total price : {allPrices}.- CHF</h2>
		</div>
	</div>
</div>

<style>
	.main--div {
		height: 97vh;
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
	}
	.div--encaps {
		margin: auto;
		padding: 20px;
		width: 40%;
		height: auto;
		display: flex;
		flex-direction: column;
		background: linear-gradient(30deg, slategrey, #333);
		border-radius: 7px;
		box-shadow: 0px 0px 7px #333;
	}
	.div--allmerchants {
		padding: 20px;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0);
		border-radius: 7px;
		box-shadow: 0px 0px 10px #333;
		color: dimgrey;
	}
	.class--other {
		padding: 20px;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0);
		font-size: 1.0rem;
		font-weight: bold;
		color: #f8f8ff;
		border-radius: 7px;
		box-shadow: 0px 0px 10px #333;
	}
	p {
		padding: 5px 10px;
		background: linear-gradient(30deg, slategrey, #333);
		border-radius: 3px;
		box-shadow: 0px 0px 7px #333;
	}
	.p--name {
		color: #fff;
	}
	.p--quantity {
		color: #fff;
	}
	.p--price {
		color: #fff;
	}
	.class--total {
		color: dimgrey;
	}
</style>