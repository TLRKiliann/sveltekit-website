<script lang="ts">
	import { goto } from '$app/navigation'

	export let data;
	const news: News = data.news;

	const handleBack = () => {
		goto('/')
	}
</script>

<div class="main--div">
	<div class="header--div">
		<h1 class="h1--tag">All News Page</h1>
		<button on:click={handleBack} class="class--btn">Back to Home</button>
	</div>

	<div class="second--div">
		{#each news as newt}
			<div class="div--encaps">
				<div class="div--news">
					<a href={`/news/${newt.id}`}>{newt.id}) {newt.title}</a>
					<p><strong>Category:</strong> {newt.category}</p>
					<hr />
				</div>
			</div>
		{/each}
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
	.second--div {
		margin-top: 20px;
	}
	.div--encaps {
		width: 60%;
		height: auto;
		margin: 20px auto;
		padding: 12px 12px;
		background: #333;
		border-radius: 7px;
		box-shadow: 0px 0px 10px #000;
	}
	.div--news {
		width: auto;
		margin: 10px 10px;
		padding: 10px 20px;
		background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
		border-radius: 7px;
		box-shadow: 0px 0px 10px lightblue;
	}
	.div--news a {
		text-decoration: none;
		font-size: 1.4rem;
		font-weight: bold;
		color: royalblue;
	}
	.div--news a:hover {
		color: orange;
	}
	.div--news p {
		font-size: 1.2rem;
		color: #777;
	}
	hr {
		margin: 15px 0px;
		border: 1px solid #777;
	}
</style>