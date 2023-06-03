<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation'; 
  import cpuware from '$lib/images/pcware.jpg';

  //const totalPrices = $page.url.searchParams.get('allPrices')

  export let data: PageData;
  const allPrices = data.allPrices;

  const profileData = data.profileData;

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
    <div class="subdiv--encaps">


      <div class="div--headers">
        <h2 class="title--h2">Payment</h2>
      </div>

      <div class="div--input">

        <div class="container--pinput">
          <p>Name :</p>
      
          <input 
            type="text" 
            name="username"
            value={profileData.name}
            placeholder="Username"
            class="input--tag"
          />

        </div>
        <div class="container--pinput">
          <p>Lastname :</p>

          <input 
            type="string" 
            name="lastname" 
            value={profileData.lastname} 
            placeholder="lastname" 
            class="input--tag"
          />

        </div>
        <div class="container--pinput">
          <p>Phone :</p>

          <input
            type="string"
            name="phone"
            value={profileData.phone}
            placeholder="Phone"
            class="input--tag"
          />

        </div>
        <div class="container--pinput">
          <p>Address :</p>

          <input
            type="text"
            name="address"
            value={profileData.address}
            placeholder="Address"
            class="input--tag"
          />

        </div>
        <div class="container--pinput">
          <p>Email :</p>

          <input
            type="email"
            name="email"
            value={profileData.email}
            placeholder="Email"
            class="input--tag"
          />
        </div>
      </div>

      <div class="div--total">
        <h2 class="h2--tag">Total to pay :</h2> 
        <h2>{Number(allPrices).toFixed(2)}.- CHF</h2>
      </div>

      <div class="div--payment">
        <a href='/api/payment' class="a--payment">
          Register
        </a>
      </div>

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
    margin: auto;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 10px;
    box-shadow: 0px 0px 10px #333;
  }
  .subdiv--encaps {
    padding: 5px 20px;
    padding-bottom: 20px;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .container--pinput {
    margin: 5px 0px;
    display: flex;
    align-items: center;
  }
  .container--pinput p {
    width: 200px;
    margin: auto;
    font-size: 1.2rem;
  }
  .container--pinput input {
    padding: 5px 10px;
    font-size: 1.0rem;
  }
  .div--total {
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: slategrey;
  }
  .div--total h2 {
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.8rem;
    color: orange;
    text-shadow: 1px 0px 1px #333;
  }
</style>