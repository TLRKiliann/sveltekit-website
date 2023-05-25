<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';

  export let data: DataCookie[];
  const tastyCookie = data.tastyCookie;
</script>

<svelte:head>
  <title>{ $page.data.title || "DigiCode" }</title>
</svelte:head>

<Header newTastyCookie={tastyCookie} />

<slot />
<Footer />
