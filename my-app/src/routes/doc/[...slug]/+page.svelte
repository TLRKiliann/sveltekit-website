<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  //const newSlug = $page.params.slug.split('/');

  const newElem = data.newElem;
  const review = data.review;
</script>

<div class="main--div">

  <div class="header--div">
    <h1 class="class--h1">{newElem.title}</h1>
  </div>

  <div class="class--slug">
    <div class="sub--slug">
      <p>date : {newElem.date}</p>
      <p>category : {newElem.category}</p>
      <p>core : {review.core}</p>
      <p>GHz : {review.ghz}</p>
      <p>turbo : {review.turbo}</p>
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
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
    color: #3f414d;
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
</style>