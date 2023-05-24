<script lang="ts">
  import type { PageData } from './$types';
  import ProductCart from '$lib/ProductCart.svelte';
  import { goto } from '$app/navigation'
  import { cartItems } from '../cart.ts';
  import { get } from 'svelte/store';
  import '@fontsource-variable/crimson-pro';

  export let data: PageData;
  const products: Product[] = data.products;

  let totalCarts = get(cartItems);
  console.log(totalCarts, "total");

  let allCarts = totalCarts.reduce((a, c) => a + c.quantity, 0);

  const handleBack = () => {
    goto('/');
  }

  //console.log(allCarts, 'allCarts')
</script>

<div class=main--div>
  <div class="header--div">
    <h1 class="class--h1">All Products Page</h1>
    <button on:click={handleBack} class="class--btn">Back to Home</button>
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
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
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
    background: linear-gradient(30deg, #f8f8ff, lightblue);
    border: 3px outset #333;
    border-radius: 7px;
    color: orange;
    text-shadow: 1px 1px 1px #333;
  }
  .class--btn:hover {
    background: orange;
    border: 0px solid orange;
    color: #f8f8ff;
  }
  .class--btn:active {
    background: lightgreen;
    border: 3px solid lightgreen;
    color: #fff;
  }
  .second--div {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1Fr 1Fr 1Fr 1Fr;
    grid-template-rows: 1Fr 1Fr;
    grid-column-gap: 40px;
    grid-row-gap: 20px;
  }
</style>