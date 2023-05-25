<script lang="ts">
  	import type { PageData } from './$types';
	import { cartItems, removeFromCart } from '../../cart.ts';
	import { get } from 'svelte/store';

	export let data: PageData;
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

		<div class="div--design">
			<div class="div--allmerchants">
				<h2 class="product--name">Product name: {product.name}</h2>
				<h3>CHF : {product.price.toFixed(2)}.-</h3>
				<h3>Description : {product.description}</h3>
			</div>
		</div>
	
	</div>
	<div class="div--encaps">

		<div class="div--design2">
			<div class="class--other">
				{#each allQuantityProducts as other}
					<p class="p--name"><span>Name of product</span> : {other.name}</p>
					<p class="p--quantity"><span>Quantity</span> : {other.quantity}x</p>
					<p class="p--price"><span>CHF</span> : {other.price.toFixed(2)}.-</p>
					<hr class="hr--design" />
				{/each}
				<div class="allquantity">
					<h3>Total of products : </h3>
					<h3 class="display--right">{allQuantity}</h3>
				</div>
				<div class="allprice">
					<h2>Total price : </h2>
					<h2 class="display--right">CHF : {allPrices.toFixed(2)}.-</h2>
				</div>
			</div>
		</div>

	</div>
</div>

<style>
	.main--div {
		min-height: 97vh;
		display: flex;
		justify-content: space-around;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
	}
	.div--encaps {
		padding: 100px 0px;
		margin: auto;
		width: 44%;
		height: auto;
		display: flex;
		flex-direction: column;
	}
	.div--allmerchants {
		padding: 20px;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0);
		border-radius: 7px;
		box-shadow: 0px 0px 10px #333;
		color: #3f414d;
	}
	.product--name {
		margin: auto;
		color: #3f414d;
	}
	.div--allmerchants h3 {
		margin-top: 10px;
	}
	.div--design {
		padding: 20px;
		background: linear-gradient(30deg, slategrey, #333);
		border-radius: 7px;
		box-shadow: 0px 0px 7px #333;
	}
	.div--design2 {
		padding: 20px;
		background: linear-gradient(30deg, slategrey, #333);
		border-radius: 7px;
		box-shadow: 0px 0px 7px #333;
	}
	.class--other {
		padding: 20px;
		font-size: 1.0rem;
		font-weight: bold;
		color: #f8f8ff;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0);
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
	.hr--design {
		border: 1px solid #9ba6b1;
	}
	.allquantity {
		width: 100%;
		margin: auto;
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: slategrey;
	}
	.allprice {
		width: 100%;
		margin: auto;
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #3f414d;
	}
	.allquantity h3 {
		width: 100%;
		margin: auto;
	}
	.allprice h2, h3 {
		width: 100%;
		margin: auto;
	}
	.display--right {
		text-align: right;
	}
</style>