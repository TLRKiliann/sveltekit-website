<script>
	import { goto } from '$app/navigation'

	export let data;
	const news = data.news;

	const handleBack = () => {
		goto('/')
	}
</script>

<div class="main--div">
	<h1>All News Page</h1>
	<button on:click={handleBack}>Back to Home</button>
</div>

<div>
{#each news as newt}
	<div id={newt.id}>
		<a href={`/news/${newt.id}`}>{newt.title}</a>
		<p>{newt.article}</p>
		<p>{newt.category}</p>
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
	button {
		padding: 7px 10px;
	}
</style>