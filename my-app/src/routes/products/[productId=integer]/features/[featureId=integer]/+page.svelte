<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import '@fontsource-variable/crimson-pro';
  import mapImg from '$lib/images/map.png';
  import bg_cpu from '$lib/images/bluecpu.jpg';

  export let data: PageData;

  const feature = data.feature;
  const product = data.product;
</script>

<div class="main--div">

  <div class="divimg--cpu">
    <img alt="bg_cpu" src={bg_cpu} class="imgbg_cpu"/>
  </div>

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

  <div class="div--slug">
    <a href={`/warranty/products/${product.id}/features/${feature.id}`}>
      Read the warrenty for {product.name} (slug)
    </a>
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
    z-index: 1;
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
  .div--slug {
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }
  .div--slug a {
    text-decoration: none;
    font-size: 1.2rem;
  }
  .div--slug a:hover {
    color: orange;
  }
  .flip-card {
    background-color: transparent;
    margin: 7% auto;
    width: 30%;
    height: 280px;
    perspective: 1000px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
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
    line-height: 75px;
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
    display: flex;
    width: 90%;
    height: 83%;
    border-radius: 7px;
    z-index: -1;
  }
  .map--img {
    width: 100%;
    height: auto;
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
  @media only screen and (max-width: 1200px) {
    .map--div {
      width: 88%;
      height: 83%;
    }
  }

  @media only screen and (min-width: 1300px) {
    .map--div {
      width: 92%;
      height: 83%;
    }
  }

</style>