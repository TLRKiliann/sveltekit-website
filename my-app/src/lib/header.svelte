<script>
  export let newTastyCookie;
</script>

<header class="class-header">
  <nav class="class--nav">
    <h2 class="class--logo">DigiCode</h2>
    <ul class="class--ul">
      <li class="class--li">
        <a href="/products">Products</a>
      </li>
      <li class="class--li">
        <a href="/news">News</a>
      </li>
      <li class="class--li">
        <a href="/members">Members</a>
      </li>
      {#if newTastyCookie !== undefined}
        <div class="class--licookie">
          {newTastyCookie}
          <div class="dropdown-content">
            <a href="/logout" class="class--acook">Profile</a>
            <hr/>
            <a href="/logout" class="class--acook">Settings</a>
            <hr/>
            <a 
              href="/logout" 
              data-sveltekit-preload-data="hover" 
              class="class--bcook">Logout</a>
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
    font-size: 1.2rem;
    font-weight: bold;
    background: linear-gradient(30deg, #fff, skyblue);
    box-shadow: 0px 0px 20px #f8f8ff;
  }
  .class--logo {
    margin: 0px;
    color: royalblue;;
  }
  .class--nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px;
  }
  .class--ul {
    display: flex;
    justify-content: right;
  }
  .class--li {
    display: flex;
    margin-left: 80px;
  }
  .class--licookie {
    position: relative;
    margin-right: 20px;
    margin-left: 80px;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    margin-left: -10px;
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
    color: #ccc;
  }
  .class--licookie:hover .dropdown-content {
    display: block;
  }
  .class--li a {
    text-decoration: none;
    color: royalblue;
  }
  .class--login {
    margin: auto;
    margin-right: 20px;
  }
</style>