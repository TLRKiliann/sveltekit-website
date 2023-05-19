<script>
	import { goto } from '$app/navigation';

	export let data;
	const newElement = data.newElement;
</script>

<div>
	<button on:click={() => goto('/')}></button>
</div>

<div id={newElement.id}>
	<h2>{newElement.title}</h2>
	<p>{newElement.article}</p>
	<p>{newElement.category}</p>
</div>