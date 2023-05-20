<script>
	export let data;
	const title = data.title;
</script>

<slot />

<p>{title}</p>