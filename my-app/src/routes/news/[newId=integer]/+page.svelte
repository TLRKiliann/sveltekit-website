<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import { articles } from '$lib/articles/articlePage.ts';
  import newpaper from '$lib/images/newspaper.jpg';
  import '@fontsource-variable/crimson-pro';
  import '@fontsource/roboto';
  
  export let data: PageData;

  const newArticle: New[] = data.newArticle;

  let articleById = articles.find((art) => art.id === newArticle.id);
</script>

<div class="main--div">

  <div class="div--bgimgjournal">
    <img alt="img bg" src={newpaper} class="img--bgjournal" />
  </div>

  <div class="div--btn">
    <h1 class="title--h1">News about : {newArticle.title}</h1>
    <button on:click={() => goto('/news')} class="class--btn">Back to News</button>
  </div>
  
  <div class="container">
    <div class="div--newsbyid">
      <h2 class="class--h2">{newArticle.title}</h2>
      <h4 class="class--h4">Category: {newArticle.category}</h4>
      <h4 class="class--h4">{newArticle.date}</h4>
      <hr class="class--hr" />
      <p class="class--p">{articleById.article}</p>
      <p class="class--p">{articleById.secondarticle}</p>
      <p class="class--p">{articleById.thirdarticle}</p>
    </div>
  </div>

</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
  .div--btn {
    margin: auto;
    padding: 10px 20px;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    padding: 20px;
    width: 70%;
    margin: 5% auto;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 10px;
    box-shadow: 0px 0px 10px #333;
  }
  .div--newsbyid {
    padding: 5px 20px;
    margin: auto;
    background: #dee8f0;
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .class--h4 {
    color: #3f414d;
  }
  .class--hr {
    border: 1px solid slategrey;
  }
  .class--p {
    display: flex;
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    color: #3f414d; 
  }
</style>