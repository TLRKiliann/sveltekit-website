<script lang="ts">
	import { goto } from '$app/navigation'
	
	export let data;
	const members: Members = data.members;

	const handleBack = () => {
		goto('/')
	}
</script>

<div class="main--div">
	<h1>{data.title}</h1>
	<button on:click={handleBack}>Back to Home</button>
</div>

<div class="div--member">
	{#each members as member}
		<h3>Name : {member.name}</h3>
		<p>Age : {member.age}</p>
		<p>Status : {member.status}</p>
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
	.div--member {
		margin: 0px 20px;
	}
</style>