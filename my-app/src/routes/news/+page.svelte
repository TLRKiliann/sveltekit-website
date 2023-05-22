<script lang="ts">
	import { goto } from '$app/navigation'

	export let data;
	const news: News = data.news;

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
	<div class="second--div">
		<a href={`/news/${newt.id}`}>{newt.id}) {newt.title}</a>
		<p><strong>Category:</strong> {newt.category}</p>
	</div>
	<hr />
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
	button {
		padding: 7px 10px;
	}
	.second--div {
		margin: auto 10px;
		padding: 10px 20px;
		box-shadow: 0px 0px 10px #ccc;
	}
	.second--div a {
		text-decoration: none;
		font-size: 1.4rem;
		font-weight: bold;
		color: blue;
	}
	.second--div p {
		font-size: 1.0rem;
	}
	hr {
		margin: 15px 0px;
		border: 1px solid #eee;
	}
</style>