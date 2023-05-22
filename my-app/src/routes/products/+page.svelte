<script lang="ts">
	import ProductCart from '$lib/ProductCart.svelte';
	import { goto } from '$app/navigation'

	const handleBack = () => {
		goto('/');
	}

	let products: Product[] = [
		{
			"id": 1,
			"name": "IA text",
			"price": 24.50
		},
		{
			"id": 2,
			"name": "IA paint",
			"price": 30
		},
		{
			"id": 3,
			"name": "IA traduction",
			"price": 35.50
		},
		{
			"id": 4,
			"name": "IA search",
			"price": 40.50
		},
		{
			"id": 5,
			"name": "IA car",
			"price": 41
		},
		{
			"id": 6,
			"name": "IA algorythm",
			"price": 44.50
		},
		{
			"id": 7,
			"name": "IA hologram",
			"price": 50
		},
		{
			"id": 8,
			"name": "IA self",
			"price": 60.50
		}
	];

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
	.second--div {
		width: 90%;
		margin: auto;
		display: grid;
		grid-template-columns: 1Fr 1Fr 1Fr 1Fr;
		grid-template-rows: 1Fr 1Fr;
		grid-column-gap: 20px;
		grid-row-gap: 20px;
	}
</style>