<script lang="ts">
  import logo from '$lib/images/sveltekit.png';
  export let data: PageData[];
  
  const tastyCookie = data.tastyCookie;

</script>

<div class="main--div">
  <h1 class="class--h2">
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
  .main--div {
    position: fixed;
    top: 60px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(30deg, #d2dfe9, skyblue);
    z-index: -1;
  }
  .class--h2 {
    padding: 0px 20px;
    padding-top: 20px;
    margin: auto;
    font-size: 2.8rem;
    color: #d0d7de;
    text-shadow:
    2px 2px 2px burlywood,
    3px 3px 3px #fa9777,
    5px 5px 1px dimgrey,
    10px 10px 3px #707070;
  }
  .class--img {
    display: flex;
    width: 100%;
    margin: 2% auto;
    object-fit: cover;
  }
</style>
