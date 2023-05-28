<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import '@fontsource-variable/crimson-pro';
  import mapImg from '$lib/images/map.png';

  export let data: PageData;
  const feature = data.feature;
  const product = data.product;
</script>

<div class="main--div">
  <div class="header--div">
    <h1 class="title--h1">Features</h1>
    <button type="button" on:click={() => goto('./')} class="class--btn">
      Go Back
    </button>
  </div>

  <div class="flip-card">    
    <div class="flip-card-inner">

      <div class="flip-card-front">
        <div class="sub--features">
          <p>CPU: {product.name}</p>
          <p>{product.description}</p>
          <p>Core: {feature.core}</p>
          <p>GHz: {feature.ghz}</p>
          <p>Turbo: {feature.turbo}</p>
        </div>
      </div>
    
      <div class="flip-card-back">
        <div class="back--features">
          <div class="map--div">
            <img alt="img map" src={mapImg} class="map--img" />
          </div>
          <h1>Industrial Inc.</h1> 
          <h3>2200 Mission College Blvd.</h3> 
          <h3>Santa Clara, CA 95052 - USA</h3>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
    margin: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
  }
  .header--div {
    margin: auto;
    margin-top: 20px;
    padding: 0px 20px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flip-card {
    background-color: transparent;
    margin: 7% auto;
    width: 30%;
    height: 280px;
    perspective: 1000px;
    /*border: 12px solid red;*/
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  .flip-card-front {
    padding: 20px 20px;
    font-size: 1.2rem;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .sub--features {
    padding: 10px 10px;
    border-radius: 7px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    box-shadow: 0px 0px 10px #333;
  }
  .sub--features p {
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3f414d;
  }

  .flip-card-back {
    padding: 0px 20px;
    width: 300px;
  
    line-height: 71px;
  
    background: linear-gradient(30deg, slategrey, #000, #000);
    transform: rotateY(180deg);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .back--features {
    padding: 0px 0px;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
    color: whitesmoke;
    text-shadow: 1px 1px 1px #333;
  }
  .map--div {
    position: fixed;
    margin: auto;
    width: 366px;
    
    height: 270px;

    border-radius: 7px;
    z-index: -1;
  }
  .map--img {
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 7px;
    opacity: 0.8;
    object-fit: cover;
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 90%;
    height: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
</style>