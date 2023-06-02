<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import '@fontsource-variable/crimson-pro';
  
  export let form: ActionData;
  export let data: PageData;

  const profileData = data.profileData;
  const password = data.password;

  const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<div class="div--form">
  
  <div class="div--encaps">
    <form method='post'>
      <div class="div--headers">
        <h2 class="class--h2">Settings</h2>
        <p style={form?.message ? {display: "flex"} : {display: "none"}}
          class="para--tag"
        >
          {form?.message || ""}
        </p>
      </div>

      <div class="div--input">

        <p>Name</p>
      
        <input 
          type="text" 
          name="username"
          value={profileData.name}
          placeholder="Username"
          class="input--tag"
        />

        <p>Lastname</p>

        <input 
          type="string" 
          name="lastname" 
          value={profileData.lastname} 
          placeholder="lastname" 
          class="input--tag"
        />

        <p>Password</p>

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          class="input--tag"
        />

        <p>Phone</p>

        <input
          type="string"
          name="phone"
          value={profileData.phone}
          placeholder="Phone"
          class="input--tag"
        />

        <p>Address</p>

        <input
          type="text"
          name="address"
          value={profileData.address}
          placeholder="Address"
          class="input--tag"
        />

        <p>Email</p>

        <input
          type="email"
          name="email"
          value={profileData.email}
          placeholder="Email"
          class="input--tag"
        />
      </div>

      <div class="div--btn">
        <button formaction="?/register&redirectTo={redirectTo}">
          Register
        </button>
      </div>
    </form>
  </div>

</div>

<style>
  .div--form {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    box-sizing: border-box;
    z-index: -2;
  }
  .div--encaps {
    padding: 20px;
    width: 30%;
    margin: 15% auto;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 10px;
    box-shadow: 0px 0px 10px #333;
  }
  form {
    padding: 20px 20px;
    border-radius: 7px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    box-shadow: 0px 0px 10px #333;
  }
  .div--headers {
    margin: 0px 10px;
  }
  .class--h2 {
    margin: auto;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.8rem;
    color: slategrey;
  }
  .para--tag {
    margin: 10px auto;
    text-align: center;
    font-size: 1.1rem;
    color: red;
  }
  p {
    margin: 5px 10px;
  }
  .div--input {
    display: flex;
    flex-direction: column;
  }
  .div--input input {
    margin: 0px 10px;
    padding: 7px 10px;
  }
  .input--tag {
    background: whitesmoke;
    border: 1px solid slategrey;
    border-radius: 3px;
    box-shadow: 0px 0px 3px slategrey;
  }
  .input--tag::placeholder {
    font-weight: bold;
    color: slategrey;
  }
  .div--btn {
    margin: 0px 10px;
    display: flex;
    justify-content: right;
  }
  .div--btn button {
    padding: 7px 20px;
    margin-top: 10px;
    margin-bottom: 0px;
    margin-left: 15px;
    font-size: 0.9rem;
    font-weight: bold;
    background: dodgerblue;
    border: 1px solid dodgerblue;
    border-radius: 7px;
    box-shadow: 0px 0px 7px slategrey;
    color: whitesmoke;
  }
  .div--btn button:hover {
    background: royalblue;
    border: 1px solid royalblue;
    box-shadow: 0px 0px 0px #fff;
    color: white;
  }
</style>