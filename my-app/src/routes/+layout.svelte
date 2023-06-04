<script lang="ts">
  import { page } from "$app/stores";
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  import '@fontsource-variable/crimson-pro';
  import '../app.css'

  export let data: DataCookie[];
  const tastyCookie = data.tastyCookie;
</script>

<svelte:head>
  <title>{ $page.data.title || "Micro-Proc" }</title>
  <meta name="description" content={ $page.data.title || "Micro-Proc"}>
</svelte:head>

<Header tastyCookie={tastyCookie} />

<slot />

<Footer />