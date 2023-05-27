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
    <h1 class="class--h1">Features</h1>
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