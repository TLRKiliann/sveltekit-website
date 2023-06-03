<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="main--div">
  <div class="error--container">
    <h3>{$page.error.message}</h3>
    <h4>{$page.error.hint}</h4>
  </div>
</div>

<style>
  .main--div {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    z-index: -1;
  }
  .error--container {
    width: 400px;
    margin: 25% auto;
    color: grey;
    background: whitesmoke;
    border: 1px solid grey;
    border-radius: 7px;
    box-shadow: 0px 0px 50px inset #242424;
  }
  .error--container h3 {
    text-align: center;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 2rem;
  }
  .error--container h4 {
    text-align: center;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.6rem;
  }
</style>