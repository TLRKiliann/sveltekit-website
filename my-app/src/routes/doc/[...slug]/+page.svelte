<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  //const newSlug = $page.params.slug.split('/');

  const newElem = data.newElem;
  const review = data.review;
</script>

<div class="main--div">
  <div class="header--div">
    <h1 class="class--h1">Hello Slug !</h1>
  </div>
  <div class="class--slug">
    <p>title : {newElem.title}</p>
    <p>date : {newElem.date}</p>
    <p>category : {newElem.category}</p>
    <p>pin : {review.pin}</p>
    <p>serie : {review.serie}</p>
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
    margin: 20px;
    font-size: 1.2rem;
  }
</style>