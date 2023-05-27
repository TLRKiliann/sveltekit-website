<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const news = data.news;
  const reviews = data.reviews;
  //console.log(news, reviews, "news & reviews");
</script>

<div class="main--div">
  
  <div class="header--div">
    <h1 class="class--h1">Documentation</h1>
  </div>
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
    width: 100%;
    min-height: 100vh;
    margin: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
  }
  .header--div {
    padding: 0px 20px;
    padding-top: 70px;
  }
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
    color: #3f414d;
  }
  .review--news {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  }
  .review--news a {
    margin: 5px 20px;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .review--news a:hover {
    color: orangered;
  }
</style>