<script lang="ts">
  import logo from '$lib/images/sveltekit.png';
  import '@fontsource-variable/crimson-pro';
  import { page } from '$app/stores';

  export let tastyCookie;
  //console.log(tastyCookie, "new cookie")
</script>

<header class="class-header">
  <nav class="class--nav">
    <div class="div--logo">
      <img class="class--logo" alt="The project logo" src={logo} />
    </div>
    <ul class="class--ul">
      <li class="class--li">
        <a data-sveltekit-reload href="/">Home</a>
      </li>
      <li class="class--li">
        <a data-sveltekit-reload="off" href="/products">Products</a>
      </li>
      <li class="class--li">
        <a href="/galerie">Galerie</a>
      </li>
      <li class="class--li">
        <a href="/news">News</a>
      </li>
      <li class="class--li">
        <a href="/members">Members</a>
      </li>

      {#if tastyCookie !== undefined}
        <div class="class--licookie">
          <p class="p--cookie">{tastyCookie}</p>

          <div class="dropdown-content">
            <a href="/profile" class="class--acook">
              Profile
            </a>
            
            <hr/>
            
            <a href="/api/settings" class="class--acook">
              Settings
            </a>
            
            <hr/>
            
            <a 
              data-sveltekit-reload
              href="/logout" 
              class="class--bcook"
            >
                Logout
            </a>
          </div>

        </div>
      {:else}
        <li class="class--li">
          <a href="/members" class="class--login">Login</a>
        </li>
      {/if}

    </ul>
  </nav>
</header>

<style>
  .class-header {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    background: linear-gradient(30deg, #d2dfe9, #f2f2ff, lightblue);
    box-shadow: 0px 0px 10px slategrey;
    z-index: 3;
  }
  .class--nav {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .div--logo {
    display: flex;
  }
  .class--logo {
    width: 170px;
    object-fit: cover;
  }
  .class--ul {
    display: flex;
    justify-content: right;
  }
  .class--li {
    display: flex;
    margin-left: 40px;
  }
  .class--licookie {
    position: relative;
    margin-right: 40px;
    margin-left: 40px;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
  }
  .p--cookie {
    margin: auto;
    font-family: 'Crimson Pro Variable', serif;
    color: #333;
    color: slategrey;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    margin-left: -5px;
    padding: 12px 16px;
    z-index: 1;
  }
  .dropdown-content a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #424242;
  }
  .dropdown-content a:hover {
    text-decoration: none;
    font-size: 1.1rem;
    color: slategrey;
  }
  .class--licookie:hover .dropdown-content {
    margin-top: 0px;
    display: block;
    background: linear-gradient(180deg, lightblue, #d2dfe9, #f8f8ff);
  }
  .class--li a {
    text-decoration: none;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
  }
  .class--li a:hover {
    color: grey;
  }
  .class--li a:active {
    color: orange;
  }
  .class--login {
    margin: auto;
    margin-right: 40px;
  }
</style>