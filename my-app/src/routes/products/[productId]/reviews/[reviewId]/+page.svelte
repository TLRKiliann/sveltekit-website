<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import '@fontsource-variable/crimson-pro';
  
  export let data: PageData;
  const review = data.review;
  const product = data.product;
</script>

<div class="main--div">
  <div class="header--div">
    <h1 class="title--h1">Features</h1>
    <button type="button" on:click={() => goto('./')} class="class--btn">
      Go Back
    </button>
  </div>

  <div class="class--review">
    <div class="sub--features">
      <p>CPU: {product.name}</p>
      <p>{product.description}</p>
      <p>Core: {review.core}</p>
      <p>GHz: {review.ghz}</p>
      <p>Turbo: {review.turbo}</p>
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
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
  }
  .header--div {
    margin: auto;
    margin-top: 20px;
    padding: 0px 20px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .class--review {
    padding: 20px 20px;
    width: 30%;
    margin: 10% auto;
    font-size: 1.2rem;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .sub--features {
    padding: 10px 20px;
    border-radius: 7px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    box-shadow: 0px 0px 10px #333;
  }
  .sub--features p {
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3f414d;
  }
</style>