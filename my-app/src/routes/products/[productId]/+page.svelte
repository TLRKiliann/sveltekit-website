<script lang="ts">
	export let data;
	const product: Product[] = data.product;
</script>

<div class="main--div">
	<div id={product.id}>
		<h2>{product.product_name}</h2>
		<h3>Price: {product.price}</h3>
		<h3>Stock: {product.product_stock}</h3>
	</div>
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