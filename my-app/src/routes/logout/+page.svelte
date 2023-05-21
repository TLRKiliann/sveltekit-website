<script>
	import { goto } from '$app/navigation';

	const handleRefresh = () => {
		goto('/')
	}
	console.log("ok ?")
</script>

<h1 
	data-sveltekit-reload 
	class="class-logout"
>
	Logout ok, see you next time !
</h1>

<button on:click={handleRefresh}>Back to Home</button>

<style>
	.class-logout {
		width: 40%;
		margin: 30% auto;
	}
</style>