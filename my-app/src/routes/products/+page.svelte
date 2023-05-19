<script lang="ts">
	import { goto, preloadCode } from '$app/navigation'
	
	export let data;
	const products: Products = data.products;

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
		<div class="third--div">
			<a href={`/products/${product.id}`} class="class--a">
				{product.product_name}
			</a> 
			<p>Price : {product.price}</p>
			<p>Stock : {product.product_stock}</p>
			<button class="sec--btn"
				on:focus={async () => {
					await preloadCode(`/products/${product.id}`) 
				}}
				on:mouseover={async () => {
					await preloadCode(`/products/${product.id}`)
				}}
				on:click={() => goto(`/products/${product.id}`)}
			>
				Click
			</button>
		</div>
	{/each}
</div>

<style>
	.main--div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 50px 10px;
		color: #242424;
	}
	.class--btn {
		padding: 7px 10px;
		cursor: pointer;
	}
	.second--div {
		margin: 4% 10%;
		display: grid;
		grid-template-rows: 1Fr 1Fr;
		grid-template-columns: 1Fr 1Fr 1Fr 1Fr;
		grid-row-gap: 40px;
		grid-column-gap: 80px;
	}
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