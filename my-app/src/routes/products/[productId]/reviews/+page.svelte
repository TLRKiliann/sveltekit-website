<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import '@fontsource-variable/crimson-pro';
  
  export let data: PageData;
  const product = data.product;
  const reviews = data.reviews;

  const { productId } = $page.params
  console.log(productId, 'productId');
</script>

<div class="main--div">
  
  <div class="class--header">
    <h1 class="class--h1">All features for {product.name}</h1>
    <button type="button" on:click={() => goto('./')} class="class--btn">
      Go Back
    </button>
  </div>

  <div class="class--reviews">
    <div class="sub--features">
      {#each reviews as review}
        <a href={`/products/${productId}/reviews/${review.id}`}>
          Review by GHz : {review.ghz} - Turbo : {review.turbo} - Description: {product.description}
        </a>
      {/each}
    </div>
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
  .class--reviews {
    padding: 20px 20px;
    width: 50%;
    margin: 15% auto;
    align-items: center;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px slategrey;
  }
  .class--reviews a {
    padding: 5px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .class--reviews a:hover {
    color: orangered;
  }
  .sub--features {
    padding: 10px 20px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
</style>