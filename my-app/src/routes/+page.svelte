<script lang="ts">
  import logo from '$lib/images/sveltekit.png';
  import '@fontsource-variable/crimson-pro';

  export let data: PageData[];

  const tastyCookie = data.tastyCookie;
</script>

<div class="main--div">
  <h1 class="class--h1">
    {tastyCookie 
      ? `Welcome ${tastyCookie} to DigiCode !`
      : `Welcome to DigiCode !`
    }
  </h1>

  <div class="div--img">
    <img class="class--img" alt="The project logo" src={logo} />
  </div>
</div>

<style>
  @font-face {
    font-family: 'Crimson Pro Variable';
    font-style: normal;
    font-weight: 400;
  }
  .main--div {
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
  .div--img {
    display: flex;
    width: 80%;
    margin: 5% auto;
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
