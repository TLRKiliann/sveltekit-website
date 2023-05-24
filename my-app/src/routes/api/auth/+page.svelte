<script>
  import { page } from '$app/stores';
  import '@fontsource-variable/crimson-pro';

  export let form;
  const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<div class="div--form">
  <form method='post' action='?/login&redirectTo={redirectTo}'>
    <div class="div--headers">
      <h2 class="class--h2">Login - Register</h2>
      <p style={form?.message ? {display: "flex"} : {display: "none"}}
        class="para--tag"
      >
        {form?.message || ""}
      </p>
    </div>
    <div class="div--input">
      <input 
        type="text" 
        name="username"
        placeholder="Username"
        value={form?.username ?? ''} 
        class="input--tag"
      />
      <input type="password" name="password" placeholder="Password" class="input--tag" />
    </div>
    <div class="div--btn">
      <button type="submit">Login</button>
      <button formaction="?/register&redirectTo={redirectTo}">Register</button>
    </div>
  </form>
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
  form {
    padding: 20px 20px;
    width: 30%;
    border-radius: 7px;
    margin: 23% auto;
    background: #f8f8ff;
    box-shadow: 0px 0px 10px slategrey;
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
  .div--input {
    display: flex;
    flex-direction: column;
  }
  .div--input input {
    margin: 10px 10px;
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