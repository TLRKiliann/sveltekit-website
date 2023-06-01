<script lang="ts">
  import logo from '$lib/images/sveltekit.png';

  export let data: DataCookie[];

  const tastyCookie = data.tastyCookie;
</script>

<div class="home--div">
  <h1 class="class--h1">
    {tastyCookie 
      ? `Welcome ${tastyCookie} to Micro-Proc !`
      : `Welcome to Micro-Proc !`
    }
  </h1>
  <p class="p--legend">A website made with Sveltekit.</p>

  <div class="div--img">
    <img class="class--img" alt="The project logo" src={logo} />
  </div>
</div>

<style>
  .home--div {
    position: relative;
    width: 100%;
    min-height: 98vh;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    z-index: -1;
  }
  .class--h1 {
    padding: 0px 20px;
    padding-top: 90px;
    margin: auto;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 2.8rem;
    color: #3f414d;
    text-shadow:
    3px 3px 3px slategrey;
  }
  .p--legend {
    margin: auto;
    margin-left: 20px;
    font-family: 'Crimson Pro Variable', serif; 
    font-size: 1.4rem;
    color: dimgrey;
  }
  .div--img {
    display: flex;
    width: 80%;
    margin: 6% auto;
    background: linear-gradient(30deg, slategrey, #333, #333);
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
  }
  .class--img {
    width: 90%;
    margin: 5% auto;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
    object-fit: cover;
  }
</style>
