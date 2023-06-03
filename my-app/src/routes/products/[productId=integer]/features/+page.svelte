<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import bg_cpu from '$lib/images/bluecpu.jpg';
  
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

  <div class="div--webaccess">
    <h2 class="title--h2">Web Features Details</h2>
    <li>
      <a href="https://www.intel.com/content/www/us/en/products/details/processors/core/i5/products.html">
        Processors Core I5
      </a>
    </li>
    <li>
      <a href="https://www.intel.com/content/www/us/en/products/details/processors/core/i7/products.html">
        Processors Core I7
      </a>
    </li>
    <li>
      <a href="https://www.intel.com/content/www/us/en/products/details/processors/core/i9/products.html">
        Processors Core I9
      </a>
    </li>
  </div>

  <div class="class--features">
    <div class="sub--features">
      {#each features as feature}
        <a href={`/products/${productId}/features/${feature.id}`}>
          Feature by GHz : {feature.ghz} - Turbo : {feature.turbo}
        </a>
      {/each}
    </div>
  </div>

</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
    margin: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.8), rgba(222,232,240, 0.9));
    z-index: 1;
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
  .div--webaccess {
    width: 220px;
    margin-top: 20px;
    margin-left: 40px;
    padding: 20px;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .div--webaccess h2 {
    color: #fff;
  }
  .div--webaccess li {
    padding: 5px 10px;
    color: #fff;
  }
  .div--webaccess a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
  }
  .div--webaccess a:hover {
    color: orange;
  }
  .class--features {
    padding: 20px 20px;
    width: 400px;
    margin: 1% auto;
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
    color: royalblue;
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
</style>