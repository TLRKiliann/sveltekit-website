<script lang="ts">
  import '@fontsource-variable/crimson-pro';
  import '@fontsource/roboto';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import { articles } from '$lib/articles/articlePage.ts';
  import newpaper from '$lib/images/newspaper.jpg';

  export let data: PageData;
  const newArticle: New[] = data.newArticle;

  let articleById = articles.find((art) => art.id === newArticle.id);
</script>

<div class="main--div">

  <div class="div--bgimg">
    <img alt="img bg" src={newpaper} class="img--bg" />
  </div>

  <div class="div--btn">
    <button on:click={() => goto('/news')} class="class--btn">Back to News</button>
    <button on:click={() => goto('/doc')} class="class--btn">Go to Doc</button>
  </div>
  
  <div class="div--encaps">
    <div class="div--newsbyid">
      <h2 class="class--h2">{newArticle.title}</h2>
      <h4 class="class--h4">Category: {newArticle.category}</h4>
      <h4 class="class--h4">{newArticle.date}</h4>
      <hr class="class--hr" />
      <p class="class--p">{articleById.article}</p>
      <p class="class--p">{articleById.secondarticle}</p>
    </div>
  </div>

</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
  .div--bgimg {
    position: fixed;
    width: 1920px;
    height: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
    z-index: -2;
  }
  .img--bg {
    width: 100%;
    height: 100%;
    opacity: 0.1;
    object-fit: cover;
  }
  .div--btn {
    margin: auto;
    padding: 20px 20px;
    padding-top: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .div--encaps {
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
  .class--h2 {
    font-family: 'Crimson Pro Variable', serif;
    color: #3f414d;
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