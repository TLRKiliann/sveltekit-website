<script>
	import { page } from '$app/stores';
</script>

<div>
	<h2>{$page.error.message}</h2>
	<h3>{$page.error.hint}</h3>
</div>