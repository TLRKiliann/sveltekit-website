<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation'
  import '@fontsource-variable/crimson-pro';

  export let data: PageData;
  const members: Members = data.members;

  const handleBack = () => {
    goto('/news')
  }
</script>

<div class="main--div">

  <div class="div--header">
    <h1 class="class--h1">{data.title}</h1>
    <button on:click={handleBack} class="class--btn">Back to News</button>
  </div>

  <div class="div--member">
    {#each members as member}
      <h3>Name : {member.name}</h3>
      <h4>Age : {member.age}</h4>
      <h4>Status : {member.status}</h4>
      <h4>Email : {member.email}</h4>
      <hr />
    {/each}
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
  .div--member {
    width: 40%;
    margin: auto;
    padding-bottom: 60px;
  }
</style>