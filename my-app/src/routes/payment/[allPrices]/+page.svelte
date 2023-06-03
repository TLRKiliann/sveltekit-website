<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation'; 
  import cpuware from '$lib/images/pcware.jpg';

  //const totalPrices = $page.url.searchParams.get('allPrices')

  export let data;

  const allPrices = data.allPrices;

  const handleBack = () => {
    goto('/');
  }

</script>

<section class="main--div">

  <div class="div--imgbg">
    <img alt="pcware img" src={cpuware} class="img--pcware" />
  </div>

  <div class="header--div">
    <h1 class="title--h1">Payment</h1>
    <button on:click={handleBack} class="class--btn">
      Back to Home
    </button>
  </div>
  
  <div class="div--encaps">
    <div class="div--total">
      <h2 class="title--h2 h2--tag">Total to pay : CHF {Number(allPrices).toFixed(2)}.-</h2>
    </div>
  </div>
</section>

<style>
  .main--div {
    position: relative;
    width: 100%;
    min-height: 96vh;
    margin: auto;
  }
  .header--div {
    margin: auto 10px;
    margin-top: 20px;
    padding: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .div--encaps {
    padding: 20px;
    width: 30%;
    margin: 5% auto;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 10px;
    box-shadow: 0px 0px 10px #333;
  }
  .div--total {
    text-align: center;
    border: 1px solid #333;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
  }
</style>