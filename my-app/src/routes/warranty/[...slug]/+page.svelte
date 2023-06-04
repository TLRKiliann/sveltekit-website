<script lang="ts">
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import '@fontsource-variable/crimson-pro';
  import handyhelp from '$lib/images/helping.jpg';

  const arraySlugAddress = $page.params.slug;
  console.log(arraySlugAddress);
  const arraySlug = $page.params.slug.split('/');
  console.log(arraySlug, "finaly")
  console.log(arraySlug[0], arraySlug[1])
</script>

<section in:fly={{ duration:1000 }} out:fly={{ duration:1000 }} class=main--div>

  <div class="div--img">
    <img alt="handy img" src={handyhelp} class="img--bg" />
  </div>

  <div class="header--div">
    <h1 class="title--divbtn title--h1">Warrenty</h1>
    <div class="class--divbtn">
      <button on:click={() => goto('/')} class="class--btn1 class--btn">
        Back to Home
      </button>    
      <button on:click={() => goto(`/${arraySlugAddress}`)} class="class--btn2 class--btn">
        Go Back
      </button>
    </div>
  </div>

  <div class="div--resultslug">
    {#if arraySlug.length === 2}
      <div>
        <h2>All CPU of this generation is covered during your life.</h2>
        <p>You can always contact us at any time to this number : <span>238-746-233</span></p>
        <p>Or send an email at : <span>micro-proc@mail.com</span></p>
      </div>
    {:else if arraySlug.length === 4}
      <h2>We can help you at any time.</h2>
      <p>This product is guaranteed to last a lifetime.</p>
      <p>Contact us at any time to this number : <span>238-746-233</span></p>
      <p>Or send an email at : <span>micro-proc@mail.com</span></p>
    {/if}
  </div>
</section>

<style>
  .main--div {
    position: absolute;
    width: 100%;
    height: 100vh;
    margin: auto;
    z-index: 1;
  }
  .div--img {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .img--bg {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    object-fit: cover;
  }
  .header--div {
    margin: auto 10px;
    margin-top: 10px;
    padding: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title--divbtn {
    margin-top: 0px;
    display: flex;
  }
  .class--divbtn {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .class--btn1 {
    margin-bottom: 10px;
  }
  .div--resultslug {
    margin-left: 20px;
    color: #3f414d;
  }
  .div--resultslug h2 {
    font-family: 'Crimson Pro Variable', serif;
  }
  .div--resultslug p {
    font-size: 1.2rem;
  }
  span {
    font-weight: bold;
    color: #333;
  }
</style>