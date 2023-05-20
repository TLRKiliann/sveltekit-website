<script lang="ts">
	import { page } from '$app/stores';

	export let data: PageData;
	const title: string = data.title;
	const tastyCookie: string = data.tastyCookie;
	console.log(tastyCookie);
</script>

<svelte:head>
	<title>{ $page.data.title || "DigiCode" }</title>
</svelte:head>

<header class="class-header">
	<nav class="class--nav">
		<h2 class="class--logo">DigiCode</h2>
		<ul class="class--ul">
			<li class="class--li">
				<a href="/products">Products</a>
			</li>
			<li class="class--li">
				<a href="/news">News</a>
			</li>
			<li class="class--li">
				<a href="/members">Members</a>
			</li>
			{#if tastyCookie}
				<li class="class--li">
					<a href="/members" class="class--a">{tastyCookie}</a>
				</li>
			{:else}
				<li class="class--li">
					<a href="/members" class="class--a">Login</a>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<slot />

<footer class="class-footer">DigiCode@Corporation</footer>

<style>
	.class-header {
		position: fixed;
		top: 0px;
		right: 0px;
		left: 0px;
		font-size: 1.2rem;
		font-weight: bold;
		background: linear-gradient(30deg, #fff, skyblue);
		box-shadow: 0px 0px 20px #f8f8ff;
	}
	.class--logo {
		margin: 0px;
		color: royalblue;;
	}
	.class--nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0px 20px;
	}
	.class--ul {
		display: flex;
		justify-content: right;
	}
	.class--li {
		display: flex;
		margin-left: 80px;
	}
	.class--li a {
		text-decoration: none;
		color: royalblue;
	}
	.class--a {
		margin: auto;
		margin-right: 80px;
	}
	.class-footer {
		position: absolute;
		padding: 10px 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		text-align: center;
		font-size: 1.2rem;
		font-weight: bold;
		color: royalblue;
		background: linear-gradient(30deg, #fff, skyblue);
		box-shadow: 0px 0px 20px #f8f8ff;
	}
</style>