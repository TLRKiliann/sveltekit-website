<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import '@fontsource-variable/crimson-pro';
  
  export let data: PageData;
  
  const title = data.title;
  const arraySlug = $page.params.slug.split('/');
  //console.log(arraySlug.length, "finaly") 

  const newElem = data.newElem;
  const feature = data.feature;
</script>

<div class="main--div">

  <div class="header--div">
    <h1 class="title--h1">{newElem.title}</h1>
  </div>

  <div class="class--slug">
    <div class="sub--slug">
      {#if arraySlug.length === 1}
        <h2>Only one SLUG</h2>
        <p>date : {newElem.date}</p>
        <p>category : {newElem.category}</p>
      {:else if arraySlug.length === 2}
        <h2>With 2 SLUG</h2>
        <p>date : {newElem.date}</p>
        <p>category : {newElem.category}</p>
        <p>core : {feature.core}</p>
        <p>GHz : {feature.ghz}</p>
        <p>turbo : {feature.turbo}</p>
      {/if}
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
  .class--slug {
    width: 20%;
    margin: 10% auto;
    padding: 20px 20px;
    font-size: 1.2rem;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .sub--slug {
    padding: 10px 20px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .sub--slug p {
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #3f414d;
  }
</style>