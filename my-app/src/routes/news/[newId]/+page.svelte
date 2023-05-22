<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	const newElement: New[] = data.newElement;
</script>

<div class="main--div">
	<div>
		<h2>{newElement.title}</h2>
		<p>{newElement.article}</p>
		<p>{newElement.category}</p>
	</div>
	<div>
		<button on:click={() => goto('/')}>Back to Home</button>
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
	button {
		padding: 7px 10px;
	}
</style>