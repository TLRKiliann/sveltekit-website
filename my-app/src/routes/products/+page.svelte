<script lang="ts">
	import ProductCart from './ProductCart.svelte';
	import { goto } from '$app/navigation'

	export let data;
	const products: Product[] = data.products;

	const handleBack = () => {
		goto('/')
	}
</script>

<div class="main--div">
	<h1>All Products Page</h1>
	<button on:click={handleBack} class="class--btn">Back to Home</button>
</div>

<div class="second--div">
	{#each products as product}
		<ProductCart product={product} />
	{/each}
</div>

<style>
	.main--div {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 50px 10px;
		color: #242424;
	}
</style>