<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const news = data.news;
  const reviews = data.reviews;
  //console.log(news, reviews, "news & reviews");
</script>

<div class="main--div">
  <h1>Doc</h1>
  <div class="review--news">
    {#each news as newElement}
      {#each reviews as review}
        <a href={`/doc/${newElement.id}/${review.id}`}>
          New title: {newElement.title} - Review serie: {review.serie}
        </a>
      {/each}
    {/each}
  </div>
</div>

<style>
  .main--div {
    margin-top: 100px;
  }
  .review--news {
    display: flex;
    flex-direction: column;
  }
  .review--news a {
    margin: 5px 20px;
  }
</style>