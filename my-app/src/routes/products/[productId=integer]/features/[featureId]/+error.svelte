<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="main--div">
	<h3>{$page.error.message}</h3>
	<h4>{$page.error.hint}</h4>
</div>