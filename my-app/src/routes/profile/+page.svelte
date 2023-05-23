<script>
	import { goto } from '$app/navigation';

	export let data;
	
	const handlePageChange = () => {
		goto('/api/settings');
	}
</script>

<div class="main--div">
	<h1>Profile</h1>
</div>

<div class="div--profile">
	<p>Name: {data.profile.name}</p>
	<p>Lastname: {data.profile.lastname}</p>
	<p>Phone: {data.profile.phone}</p>
	<button on:click={handlePageChange}>Change</button>
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
	.div--profile {
		width: 40%;
		margin: auto;
		border: 1px solid #000;
	}
	.div--profile p {
		display: flex;
		justify-content: center;
	}
	button {
		display: flex;
		padding: 5px 20px;
		margin: 20px auto;	
	}
</style>

