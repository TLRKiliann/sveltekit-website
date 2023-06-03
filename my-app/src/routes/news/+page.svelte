<script lang="ts">
  import type { PageData } from './$types';
  import { fly } from 'svelte/transition';
  import { goto } from '$app/navigation'
  import '@fontsource-variable/crimson-pro';
  import newspaper from '$lib/images/newspaper.jpg'

  export let data: PageData;
  const news: News = data.news;

  const handleBack = () => {
    goto('/')
  }

  const handleArt = (id: number) => {
    goto(`/news/${id}`)
  }
</script>

<section in:fly={{ y:50, duration:500 }} out:fly={{ duration:500 }} class="main--div">

  <div class="div--bgimgjournal">
    <img alt="newspaper img bg" src={newspaper} class="img--bgjournal" />
  </div>

  <div class="header--div">
    <h1 class="title--h1">All News Page</h1>
    <button on:click={handleBack} class="class--btn">Back to Home</button>
  </div>

  <div class="second--div">
    {#each news as newt}
      <div class="container">
        <div class="div--news">
          <a href={`/news/${newt.id}`}>{newt.id}) {newt.title}</a>
          <p class="class--p"><strong>Category: {newt.category}</strong></p>
          <p class="class--p"><strong>Date: {newt.date}</strong></p>
          <hr class="class--hr" />
          <div class="div--btnart">
            <button on:click={() => handleArt(newt.id)} class="btn--art">View article</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 100vh;
    z-index: 1;
  }
  .header--div {
    margin: auto;
    padding: 0px 20px;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .second--div {
    margin: auto;
    padding-bottom: 100px;
  }
  .container {
    width: 60%;
    height: auto;
    margin: 20px auto;
    padding: 12px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 7px #000;
  }
  .div--news {
    width: auto;
    margin: auto;
    padding: 10px 20px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .div--news a {
    margin: auto;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    color: #3f414d;
  }
  .div--news a:hover {
    color: slategrey;
  }
  .div--news p {
    margin: 10px 20px;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.2rem;
    color: #3f414d;
  }
  .div--btnart {
    display: flex;
    justify-content: right;
  }
  .btn--art {
    padding: 7px 20px;
    margin: 10px 0px;
    font-weight: bold;
    text-shadow: 1px 1px 1px #333;
    background: linear-gradient(30deg, slategrey, #333);
    border: 1px solid slategrey;
    border-radius: 7px;
    box-shadow: 0px 0px 1px #333;
    color: orange;
  }
  .btn--art:hover {
    background: #333;
    box-shadow: 0px 0px 0px #333;
    color: #f8f8ff;
  }
  .btn--art:active {
    background: slategrey;
    box-shadow: 0px 0px 0px #333;
  }
  .class--hr {
    width: 93%;
    margin: 10px auto;
    border: 1px solid #9ba6b1;
  }
</style>