<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	const newElement: New[] = data.newElement;
</script>

<div class="main--div">
	<div class="header--div">
		<h2>{newElement.title}</h2>
		<button on:click={() => goto('/news')} class="class--btn">Back to News</button>
	</div>
	<div class="div--newsbyid">
		<h3 class="h3--cat">Category: {newElement.category}</h3>
		<p>{newElement.article}</p>
	</div>
</div>

<style>
	.main--div {
		position: relative;
		width: 100%;
		min-height: 96vh;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
	}
	.header--div {
		margin-top: 20px;
		padding: 50px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #242424;
	}
	.class--btn {
		padding: 10px 20px;
		font-size: 0.9rem;
		font-weight: bold;
		background: linear-gradient(30deg, #f8f8ff, lightblue);
		border: 3px outset #333;
		border-radius: 7px;
		color: orange;
		text-shadow: 1px 1px 1px #333;
	}
	.class--btn:hover {
		background: orange;
		border: 0px solid orange;
		color: #f8f8ff;
	}
	.class--btn:active {
		background: lightgreen;
		border: 3px solid lightgreen;
		color: #fff;
	}
	.h3--cat {
		color: slategrey;
	}
	.div--newsbyid {
		padding: 5px 20px;
		margin: auto 20px;
		background: #f8f8ff;
		border-radius: 7px;
		box-shadow: 0px 0px 10px slategrey;
	}
</style>