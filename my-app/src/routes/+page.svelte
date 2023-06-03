<script lang="ts">
  import logo from '$lib/images/sveltekit.png';
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
        <p>[...=integer] works with <code>/params/integer.ts</code> to avoid that 
          user enter a number greater than the number of elements of list.</p>
        <hr />

        <h3><strong>Catch all Routes</strong></h3>
        <p><code>/products/productId/doc/[...slug]</code></p>
        
        <p>[...slug] is really good for SEO ranking. Slug displays different content 
          depending on the user's page of origin.
        </p>
        <hr />

        <h3><strong>(auth) - login</strong></h3>
        <p>/api/(auth)</p>
        <p>form action </p>
        <hr />
          <h3><strong>Internal & External API</strong></h3>
        <p>load function & GET function</p>
      </article>
    </section>
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
    margin-bottom: 100px;
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
</style>
