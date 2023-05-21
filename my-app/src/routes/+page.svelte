<script lang="ts">  
  export let data: PageData[];
  
  const tastyCookie = data.tastyCookie;

</script>

<div class="main--div">
  <h1>
    {tastyCookie 
      ? `Welcome ${tastyCookie} to DigiCode !`
      : `Welcome to DigiCode !`
    }
  </h1>
</div>

<style>
  .main--div {
    padding: 50px 10px;
    color: #242424;
  }
</style>
