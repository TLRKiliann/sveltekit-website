<script lang="ts">
  import { goto } from '$app/navigation'
  import '@fontsource-variable/crimson-pro';
  export let data;
  const members: Members = data.members;

  const handleBack = () => {
    goto('/news')
  }
</script>

<div class="main--div">
  <h1 class="class--h1">{data.title}</h1>
  <button on:click={handleBack}>Back to News</button>
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

<style>
  .main--div {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 10px;
    color: #242424;
  }
  .class--h1 {
    font-family: 'Crimson Pro Variable', serif;
  }
  button {
    padding: 7px 10px;
  }
  .div--member {
    width: 40%;
    margin: auto;
    margin-bottom: 80px;
  }
</style>