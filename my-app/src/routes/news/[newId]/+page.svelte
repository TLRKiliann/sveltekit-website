<script lang="ts">
  import '@fontsource-variable/crimson-pro';
  import { goto } from '$app/navigation';
  import { articles } from '$lib/articles/articlePage.ts';

  export let data;
  const newArticle: New[] = data.newArticle;

  let articleById = articles.find((art) => art.id === newArticle.id);
</script>

<div class="main--div">
  <div class="div--btn">
    <button on:click={() => goto('/news')} class="class--btn">Back to News</button>
  </div>
  <div class="div--newsbyid">
    <h2 class="class--h2">{newArticle.title}</h2>
    <h3 class="h3--cat">Category: {newArticle.category}</h3>
    <h3 class="h3--cat">{newArticle.date}</h3>
    <p class="class--p">{articleById.article}</p>
  </div>
</div>

<style>
  @font-face {
    font-family: 'Crimson Pro Variable';
    font-weight: 400px;
  }
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
  }
  .div--btn {
    margin: auto;
    padding-top: 90px;
    padding-right: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: right;
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
  .class--h2 {
    font-family: 'Crimson Pro Variable', serif;
    color: #3f414d;
  }
  .h3--cat {
    color: #3f414d;
  }
  .div--newsbyid {
    padding: 5px 20px;
    margin: auto 20%;
    background: whitesmoke;
    border-radius: 7px;
    box-shadow: 0px 0px 10px slategrey;
  }
  .class--p {
    display: flex;
    text-align: justify;
  }
</style>