<script>
	import { goto } from '$app/navigation'
	const handleBack = () => {
		goto('/')
	}
</script>

<div class="main--div">
	<h1>All Members Page</h1>
	<button on:click={handleBack}>Back to Home</button>
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