<script lang="ts">
	import type { PageData } from './$types';
	import '@fontsource-variable/crimson-pro';
	
	export let data: PageData;
	const review = data.review;
</script>

<div class="main--div">
	<div class="header--div">
		<h1 class="class--h1">Review</h1>
	</div>
	<div class="class--review">
		<p>Pin number : {review.pin}</p>
		<p>Serie : {review.serie}</p>
	</div>
</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
    margin: auto;
  }
  .header--div {
  	margin: auto;
    margin-top: 20px;
    padding: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
  }
  .class--review {
  	width: 94%;
  	margin: auto;
  	font-size: 1.2rem;
  }
</style>