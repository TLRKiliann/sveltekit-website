<script lang="ts">
  import type { ActionData } from './$types';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import bg_landscape from '$lib/images/landscape1.jpg';
  import '@fontsource-variable/crimson-pro';


  const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<div class="main--div">
  <form method='post' action='?/logout&redirectTo={redirectTo}' class="class--logout">
  	<h1>Page Svelte Logout</h1>
  	<button type="submit" class="class--btn">Logout</button>
    <button type="button" on:click={() => goto('/')} class="class--btn">Return</button>
  </form>

  <div class="box--img">
    <img alt="landscape" src={bg_landscape}>
  </div>

</div>

<style>
  .main--div {
    width: 100%;
    height: 90vh;
  }
  .class--logout {
    position: absolute;
    width: 80%;
    margin: 18% 10%;
    text-align: center;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 2rem;
    color: #3f414d;
    z-index: 1;
  }
  .box--img {
    margin-top: 70px;
  }
  .box--img img {
    width: 100%;
    height: auto;
    opacity: 0.4;
    object-fit: cover;
  }
</style>