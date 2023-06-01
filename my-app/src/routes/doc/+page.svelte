<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const news = data.news;
  const features = data.features;
  //console.log(news, features, "news & features");
</script>

<div class="main--div">
  
  <div class="container">
    <div class="header--div">
      <h1 class="title--h1">Documentation (that's for playing with slug)</h1>
    </div>
    
    <div class="sub--revnews">
      <div class="feature--news">
        
        <p>Wih only 1 slug</p>
        {#each news as newElement}
          <a href={`/doc/${newElement.id}`}>
            Title: {newElement.title}
          </a>
        {/each}

        <p>Wih 2 slug</p>
        {#each news as newElement}
          {#each features as feature}
            <a href={`/doc/${newElement.id}/${feature.id}`}>
              Title: {newElement.title} - feature turbo: {feature.turbo}
            </a>
          {/each}
        {/each}

      </div>
    </div>
  </div>
</div>

<style>
  .main--div {
    width: 100%;
    height: auto;
    margin: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
  }
  .container {
    height: 100%;
    border: 1px solid rgba(222,232,240, 0.9);
  }
  .header--div {
    padding: 0px 20px;
    padding-top: 70px;
  }
  .sub--revnews {
    width: 35%;

    margin: 5% auto;
    margin-bottom: 100px;
    padding: 20px 20px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .feature--news {
    margin: auto;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .feature--news a {
    margin: 5px 20px;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .feature--news a:hover {
    color: orangered;
  }
</style>