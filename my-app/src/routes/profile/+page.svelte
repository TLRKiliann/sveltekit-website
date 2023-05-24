<script lang="ts">
  import { goto } from '$app/navigation';
  import '@fontsource-variable/crimson-pro';

  export let data: DataProfile[];
  
  const handlePageChange = () => {
    goto('/api/settings');
  }
  
  const handleBack = () => {
    goto('/news')
  }
</script>

<div class="main--div">

  <div class="div--header">
    <h1 class="class--h1">Profile</h1>
    <button on:click={handleBack} class="class--btn">Back to News</button>
  </div>

  <div class="div--encaps">
    <div class="div--profile">

      <div class="p--twins">
        <p class="p--title">Name : </p>
        <p class="p--color">{data.profile.name}</p>
      </div>

      <div class="p--twins">
        <p class="p--title">Lastname : </p>
        <p class="p--color">{data.profile.lastname}</p>
      </div>

      <div class="p--twins">
        <p class="p--title">Phone : </p>
        <p class="p--color">{data.profile.phone}</p>
      </div>

      <div class="div--btnprofile">
        <button on:click={handlePageChange} class="btn--profile">Change</button>
      </div>
    </div>
  </div>

</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
  }
  .div--header {
    margin: auto;
    padding: 0px 20px;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
    color: #3f414d;
  }
  .div--encaps {
    width: 40%;
    margin: 5% auto;
    padding: 20px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 15px;
    box-shadow: 0px 0px 10px #333;
  }
  .div--profile {
    margin: auto;
    padding: 10px 0px;
    background: whitesmoke;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #333;
  }
  p {
    padding: 0px 20px;
    width: 40%;
    margin: auto;
    display: flex;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3f414d;
  }
  .p--twins {
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
  }
  .p--title {
    width: 120px;
  }
  .p--color {
    background: #ccc;
  }
  .class--btn {
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: bold;
    color: orange;
    text-shadow: 1px 1px 1px #333;
    background: linear-gradient(30deg, slategrey, #333);
    border: 1px solid slategrey;
    border-radius: 7px;
    box-shadow: 0px 0px 1px #333;
  }
  .class--btn:hover {
    background: #333;
    border: 1px solid #333;
    color: #f8f8ff;
  }
  .class--btn:active {
    background: slategrey;
    border: 1px solid slategrey;
    color: #fff;
  }
  .div--btnprofile {
    display: flex;
    justify-content: center;
  }
  .btn--profile {
    padding: 7px 20px;
    margin: 20px 0px;
    font-weight: bold;
    text-shadow: 1px 1px 1px #333;
    background: linear-gradient(30deg, slategrey, #333);
    border: 1px solid slategrey;
    border-radius: 7px;
    box-shadow: 0px 0px 1px #333;
    color: orange;
  }
  .btn--profile:hover {
    background: #333;
    box-shadow: 0px 0px 0px #333;
    color: #f8f8ff;
  }
  .btn--profile:active {
    background: slategrey;
    box-shadow: 0px 0px 0px #333;
  }
</style>

