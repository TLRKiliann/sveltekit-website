<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="main--div">
	<h3>{$page.error.message}</h3>
	<h4>{$page.error.hint}</h4>
</div>

<style>
	.main--div {
		width: 40%;
		margin: 25% auto;
	
		color: steelblue;

		border: 1px solid steelblue;
		border-radius: 7px;
		box-shadow: 0px 0px 10px #ccc;
	}
	.main--div h3 {
		text-align: center;
		font-size: 2rem;
	}
	.main--div h4 {
		text-align: center;
		font-size: 1.6rem;
	}
</style>