<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';

  export let data: PageData;
  const members: Members = data.members;

  const handleBack = () => {
    goto('/')
  }
</script>

<div class="main--div">

  <div class="div--header">
    <h1 class="title--h1">{data.title}</h1>
    <button on:click={handleBack} class="class--btn">Back to Home</button>
  </div>

  <div class="div--member">
    {#each members as member}
      <h3>Name : {member.name}</h3>
      <h4>Age : {member.age}</h4>
      <h4>Status : {member.status}</h4>
      <h4>Email : {member.email}</h4>

      <div class="div--sendmsg">
        <a href={`/members/${member.id}`}>Send Message</a>
      </div>

      <hr class="hr--tag"/>
    {/each}
  </div>

</div>

<style>
  .main--div {
    position: absolute;
    width: 100%;
    min-height: 100%;
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
  .div--member {
    width: 60%;
    margin: auto;
    margin-bottom: 100px;
    background: whitesmoke;
    border-radius: 14px;
    box-shadow: 0px 0px 12px inset slategrey;
    padding: 10px 40px;
  }
  .hr--tag {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  .div--sendmsg {
    text-align: right;
  }
  .div--sendmsg a {
    text-decoration: none;
  }
</style>