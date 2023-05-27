<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import '@fontsource-variable/crimson-pro';
  
  export let data: PageData;
  const reviews = data.reviews;

  const { productId } = $page.params
  console.log(productId, 'productId');
</script>

<div class="main--div">
  
  <div class="class--header">
    <h1 class="class--h1">All reviews</h1>
  </div>

  <div class="class--reviews">
    {#each reviews as review}
      <a href={`/products/${productId}/reviews/${review.id}`}>Review : {review.id}</a>
    {/each}
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
    padding: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
  }
  .class--reviews {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .class--reviews a {
    padding: 5px;
    font-size: 1.2rem;
    text-decoration: none;
  }
</style>