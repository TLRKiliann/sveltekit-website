<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  //const tastyCookie = data.tastyCookie;

  //console.log("cookie : ", tastyCookie);

</script>

<svelte:head>
  <title>{ $page.data.title || "DigiCode" }</title>
</svelte:head>

<Header newTastyCookie={$page.data.tastyCookie} />

<slot />
<Footer />
