<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import bg_cpu from '$lib/images/micro8.jpg';
  
  export let data: PageData;
  const product = data.product;
  const features = data.features;

  const { productId } = $page.params
  console.log(productId, 'productId');
</script>

<div class="main--div">
  
  <div class="divimg--cpu">
    <img alt="bg_cpu" src={bg_cpu} class="imgbg_cpu"/>
  </div>

  <div class="class--header">
    <h1 class="title--h1">All features for {product.name}</h1>
    <button type="button" on:click={() => goto('./')} class="class--btn">
      Go Back
    </button>
  </div>

  <div class="class--features">
    <div class="sub--features">
      {#each features as feature}
        <a href={`/products/${productId}/features/${feature.id}`}>
          feature by GHz : {feature.ghz} - Turbo : {feature.turbo} - Description: {product.description}
        </a>
      {/each}
    </div>
  </div>

  <div class="div--slug">
    <a href={`/doc/products/${product.id}`}>Read our chart of garantie</a>
  </div>

</div>

<style>
  .main--div {
    width: 100%;
    min-height: 97vh;
    margin: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
  }
  .class--header {
    margin: auto;
    margin-top: 20px;
    padding: 0px 20px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .class--features {
    padding: 20px 20px;
    width: 50%;
    margin: 15% auto;
    align-items: center;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .class--features a {
    padding: 5px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .class--features a:hover {
    color: orangered;
  }
  .sub--features {
    padding: 10px 20px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .div--slug {
    position: relative;
    top: -150px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }
  .div--slug a {
    text-decoration: none;
    font-size: 1.2rem;
  }
  .div--slug a:hover {
    color: orange;
  }
</style>