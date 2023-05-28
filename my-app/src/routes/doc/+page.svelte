<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const news = data.news;
  const reviews = data.reviews;
  //console.log(news, reviews, "news & reviews");
</script>

<div class="main--div">
  
  <div class="header--div">
    <h1 class="title--h1">Documentation</h1>
  </div>
  
  <div class="sub--revnews">
    <div class="review--news">
      {#each news as newElement}
        {#each reviews as review}
          <a href={`/doc/${newElement.id}/${review.id}`}>
            Title: {newElement.title} - Review turbo: {review.turbo}
          </a>
        {/each}
      {/each}
    </div>
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
  .sub--revnews {
    width: 390px;
    margin: 10% auto;
    padding: 20px 20px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .review--news {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
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