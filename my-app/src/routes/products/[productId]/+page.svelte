<script lang="ts">
	export let data;
	const product: Product[] = data.product;
</script>

<div class="main--div">
	<div class="div--block">
		<h2>{product.name}</h2>
		<h3>Price: {product.price}</h3>
		<h3>Price: {product.description}</h3>
	</div>
</div>

<style>
	.main--div {
		height: 98vh;
		margin-top: 20px;

		padding: 50px 10px;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
		color: #242424;
	}
	.div--block {
		width: 30%;
		margin: 15% auto;
		padding: 20px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #f8f8ff;
		border-radius: 7px;
		box-shadow: 0px 0px 10px slateblue;
	}
</style>