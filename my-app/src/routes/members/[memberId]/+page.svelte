<script lang="ts">
  import type { ActionData } from './$types';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  export let form: ActionData;
  export let data: PageData;

  const member = data.member;

  const handleBack = () => {
    goto('/');
  }  
</script>

<section class="main--div">
  <div class="header--div">
    <h1 class="title--h1">
      Send Message
    </h1>
    <button on:click={handleBack} class="class--btn">
      Back to Home
    </button>
  </div>

  <div class="div--form">
    <form 
      method="post" 
      action='?/send' 
      class="class--form"
    >
      <h2 id="title--form">Send to {member.name}</h2>
        <p style={form?.message ? {display: "flex"} : {display: "none"}}
          class="para--tag"
        >
          {form?.message || ""}
        </p>
      <div class="subdiv">
        <label for="title">Title</label>
        <input id="title" name="title" placeholder="Title" />
      </div>

      <div class="subdiv">
        <label for="text">Message</label>
        <textarea
          id="text"
          name="text"
          cols="42"
          rows="5"
          placeholder="Enter your text here..."
        />
      </div>

      <div id="div--btn">
        <button type="submit" class="class--btn">Send</button>
      </div>
    </form>
  </div>

</section>

<style>
  .main--div {
    position: absolute;
    width: 100%;
    min-height: 100%;
    margin: auto;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
  }
  .header--div {
    margin: auto;
    padding: 0px 10px;
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .div--form {
    width: 400px;
    margin: 5% auto;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 10px;
    box-shadow: 0px 0px 7px #333;
    padding: 20px;
  }
  .class--form {
    padding: 10px 20px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 7px #333;
  }
  #title--form {
    text-align: center;
  }
  .para--tag {
    margin: 10px auto;
    text-align: center;
    font-size: 1.1rem;
    color: red;
  }
  .subdiv {
    margin: auto;
    margin-top: 0px;
    margin-bottom: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1.2rem;
    padding-bottom: 5px;
  }
  input {
    font-size: 1.0rem;
    padding: 3px 5px;
  }
  textarea {
    font-size: 1.0rem;
    color: #333;
  }
  #div--btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
</style>