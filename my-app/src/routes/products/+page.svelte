<script lang="ts">
  import type { PageData } from './$types';
  import ProductCart from '$lib/ProductCart.svelte';
  import { goto } from '$app/navigation'
  import { cartItems } from '../cart.ts';
  import { get } from 'svelte/store';
  import cpuware from '$lib/images/pcware.jpg';
  import '@fontsource-variable/crimson-pro';

  export let data: PageData;
  const products: Product[] = data.products;

  let totalCarts = get(cartItems);
  console.log(totalCarts, "total");

  let allCarts = totalCarts.reduce((a, c) => a + c.quantity, 0);

  const handleBack = () => {
    goto('/');
  }

  console.log(allCarts, 'allCarts')
</script>

<div class=main--div data-sveltekit-reload="off">
  
  <div class="div--imgbg">
    <img alt="pcware img" src={cpuware} class="img--pcware" />
  </div>

  <div class="header--div">
    <h1 class="class--h1">
      All Products Page
    </h1>
    <button on:click={handleBack} class="class--btn">
      Back to Home
    </button>
  </div>

  <div class="second--div">
    {#each products as product}
      <ProductCart product={product} />
    {/each}
  </div>
</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
  }
  .div--imgbg {
    position: fixed;
    width: 1920px;
    height: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
    z-index: -1;
  }
  .img--pcware {
    width: 100%;
    height: 100%;
    opacity: 0.3;
    object-fit: cover;
  }
  .header--div {
    margin-top: 20px;
    padding: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
  }
  .class--btn {
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: bold;
    color: orange;
    text-shadow: 1px 1px 1px #333;
    background: linear-gradient(30deg, slategrey, #333);
    border: 1px solid slategrey;
    border-radius: 7px;
    box-shadow: 0px 0px 1px #333;
  }
  .class--btn:hover {
    background: #333;
    border: 1px solid #333;
    color: #f8f8ff;
  }
  .class--btn:active {
    background: slategrey;
    border: 1px solid slategrey;
    color: #fff;
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