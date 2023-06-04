<script lang="ts">
  import logo from '$lib/images/sveltekit.png';
  import SocialIcons from '@rodneylab/svelte-social-icons';
  import '@fontsource/roboto';

  export let data: DataCookie[];

  const tastyCookie = data.tastyCookie;
</script>

<section class="home--div">
  <h1 class="class--h1">
    {tastyCookie 
      ? `Welcome ${tastyCookie} to Micro-Proc !`
      : `Welcome to Micro-Proc !`
    }
  </h1>
  <p class="p--legend">A website made with Sveltekit.</p>

  <div class="div--img">
    <img class="class--img" alt="The project logo" src={logo} />
  </div>

  <div>
    <section class="section--tutorial">
      <article class="article--tutorial">
        <h2 class="title--h2">Tutorial Sveltekit</h2>
        <hr />

        <h3><strong>Dynamic Routes</strong></h3>
        <p><code>/news/[newId=integer]</code></p>
        <p><code>/products/[productId=integer]</code></p>
        <p><code>/products/[productId=integer]/features/[featureId=integer]</code></p>
        
        <details>
          <summary>[objectId=integer]</summary>
          <p>works with <i>/params/integer.ts</i> to prevent the user from 
            entering a number greater than the number of elements in the list.&nbsp;&#128516;</p>
        </details>
        <hr />

        <h3><strong>Catch all Routes</strong></h3>
        <p><code>/products/productId</code></p>
        <p><code>/products/productId/features/featureId</code></p>
        <p><code>/warranty/[...slug]/+page.svelte</code></p>

        <details>
          <summary>[...slug]</summary>
          <p>improves SEO ranking. The warranty page content may 
            vary depending on the user's page origin.</p>
        </details>
        <hr />

        <h3><strong>(auth) - login</strong></h3>
        <p>/members</p>
        <p>/api/(auth)</p>
        <p>You cannot access to <i>Members</i> page directly (without login). 
          With <i>redirect</i> function, you are redirect to login (auth) and if login is correct,
          you will be redirect to <i>Members</i> page.</p>
        <hr />
          <h3><strong>Internal & External API calls</strong></h3>
        
        <details>
          <summary>Internal API calls</summary>
          <p>You can reach data with json-server outside API folder with <i>load</i> function:</p>
          <li>+page.ts</li> 
          <li>+page.server.ts</li>
          <li>+layout.server.ts</li>
          <li>+layout.ts</li>
          <p>Depending on SSR or CSR (you can use console.log() to see 
            result on terminal &/or console (web browser)).</p>
        </details>

        <details>
          <summary>External API calls</summary>
          <p>You can reach data with json-server in API folder and reach them with page above.</p>
          <p>In this case, it's not a load function. To interact with external API you should use :</p>
          <p>GET - POST - PATCH -DELETE functions</p>
          <p>By conventions, files are named :</p>
          <li>+server.ts</li>
        </details>

      </article>
    </section>
  </div>

  <div class="box--container">
    <div class="icons--box">
      <SocialIcons alt="twitter icon" network="twitter" />
      <SocialIcons alt="google icon" network="google" />
      <SocialIcons alt="linkedin icon" network="linkedin" />
      <SocialIcons alt="reddit icon" network="reddit" />
    </div>

    <div class="team--box">
      <h3>Our Team</h3>
      <p>Harris Rich</p>
      <p>Clark Kent</p>
      <p>Salamun Huawoni</p>
      <p>Cynthia Lopez</p>
    </div>

    <div class="contact--box">
      <h3>Contact Us</h3>
      <p>email: micro-proc@mail.com</p>
      <p>phone: 777-77-77</p>
      <p>address: 23 St-James Bd.</p>
      <p>CPU Valley</p>
    </div>
  </div>

</section>

<style>
  .home--div {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    margin-bottom: 0px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    z-index: -1;
  }
  .class--h1 {
    padding: 0px 20px;
    padding-top: 90px;
    margin: auto;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 2.8rem;
    color: #3f414d;
    text-shadow:
    3px 3px 3px slategrey;
  }
  .p--legend {
    margin: auto;
    margin-left: 20px;
    font-family: 'Crimson Pro Variable', serif; 
    font-size: 1.4rem;
    color: dimgrey;
  }
  .div--img {
    display: flex;
    width: 80%;
    margin: 6% auto;
    background: linear-gradient(30deg, slategrey, #333, #333);
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
  }
  .class--img {
    width: 90%;
    margin: 5% auto;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
    object-fit: cover;
  }
  .section--tutorial {
    width: 80%;
    height: auto;
    margin: auto;
    margin-top: 100px;
    background: whitesmoke;
    border-radius: 10px;
    box-shadow: 0px 0px 20px inset slategrey; 
  }
  .article--tutorial {
    padding: 20px;
    color: #333;
  }
  .article--tutorial h3 {
    font-size: 1.1rem;
  }
  .article--tutorial p {
    font-family: 'Roboto', sans-serif;
    margin-left: 30px;
    font-size: 0.9rem;
  }
  .article--tutorial code {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
  }
  details li {
    margin-left: 20px;
  }
  .box--container {
    width: 100%;
    height: 300px;
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #242424;
  }
  .box--container h3 {
    font-size: 2rem;
  }
  .box--container p {
    font-size: 1.2rem;
  }
  .icons--box {
    width: 20%;
    margin: 20px 70px;
    display: flex;
    justify-content: space-evenly;
  }
  .team--box {
    width: 20%;
    margin: 20px 50px;
    color: whitesmoke;
  }
  .contact--box {
    width: 30%;
    margin: 20px 20px;
    color: whitesmoke;
  }
</style>
