<script lang="ts">
  import type { PageData } from './$types';
  import { preloadData } from '$app/navigation';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import bg_landscape from '$lib/images/landscape1.jpg';

  export let data: PageData;
    
  console.log(data.cookie, 'data cookie')
</script>

<div class="main--div">

  <div class="class--logout">
    <h2>Ok, see you soon !</h2>
  </div>

  <div class="box--img">
    <img alt="landscape" src={bg_landscape}>
  </div>

</div>

<style>
  .main--div {
    width: 100%;
    height: 90vh;
  }
  .class--logout {
    position: absolute;
    width: 80%;
    margin: 20% 10%;
    text-align: center;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 2rem;
    color: #3f414d;
    z-index: 1;
  }
  .box--img {
    margin-top: 70px;
  }
  .box--img img {
    width: 100%;
    height: auto;
    opacity: 0.4;
    object-fit: cover;
  }
</style>