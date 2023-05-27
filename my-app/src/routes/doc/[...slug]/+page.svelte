<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  //const newSlug = $page.params.slug.split('/');

  const newElem = data.newElem;
  const review = data.review;
</script>

<div class="main--div">
  <p>title : {newElem.title}</p>
  <p>date : {newElem.date}</p>
  <p>category : {newElem.category}</p>
  <p>pin : {review.pin}</p>
  <p>serie : {review.serie}</p>
</div>

<style>
  .main--div {
    margin: 200px;
  }
</style>