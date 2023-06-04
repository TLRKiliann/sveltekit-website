<script lang="ts">
  import type { PageData } from './$types';
  import { fly } from 'svelte/transition';
  import ProductCart from '$lib/ProductCart.svelte';
  import { goto } from '$app/navigation'
  import { cartItems } from '../cart.ts';
  import { get } from 'svelte/store';
  import cpuware from '$lib/images/pcware.jpg';

  export let data: PageData;
  const products: Product[] = data.products;

  let totalCarts = get(cartItems);

  let allCarts = totalCarts.reduce((a, c) => a + c.quantity, 0);

  const handleBack = () => {
    goto('/');
  }
</script>

<section class=main--div data-sveltekit-reload="off">
  
  <div class="div--imgbg">
    <img alt="pcware img" src={cpuware} class="img--pcware" />
  </div>

  <div class="header--div">
    <h1 class="title--h1">
      All Products Page
    </h1>
    <button on:click={handleBack} class="class--btn">
      Back to Home
    </button>
  </div>

  <section in:fly={{ y:50, duration:500 }} out:fly={{ duration:500 }} class="second--div">
    {#each products as product}
      <ProductCart product={product} />
    {/each}
  </section>
</section>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
    margin: auto;
  }
  .header--div {
    margin: auto 10px;
    margin-top: 20px;
    padding: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .second--div {
    width: 90%;
    margin: 4% 4%;
    padding: 10px 10px;
    display: grid;
    grid-template-columns: 1Fr 1Fr 1Fr 1Fr;
    grid-template-rows: 1Fr 1Fr;
    grid-column-gap: 40px;
    grid-row-gap: 20px;
  }
</style>