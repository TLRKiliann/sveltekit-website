<script lang="ts">
  import type { ActionData } from './$types';
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation'; 
  import cpuware from '$lib/images/pcware.jpg';

  //const totalPrices = $page.url.searchParams.get('allPrices')

  export let data: PageData;
  //export let form: ActionData;

  const allPrices = data.allPrices;

  const profileData = data.profileData;

  const handleBack = () => {
    goto('/');
  }
  //const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
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

      <div class="div--headers">
        <h2 class="class--h2">Payment</h2>
      </div>

      <div class="div--input">

        <p>Name</p>
      
        <input 
          type="text" 
          name="username"
          value={profileData.name}
          placeholder="Username"
          class="input--tag"
        />

        <p>Lastname</p>

        <input 
          type="string" 
          name="lastname" 
          value={profileData.lastname} 
          placeholder="lastname" 
          class="input--tag"
        />

        <p>Phone</p>

        <input
          type="string"
          name="phone"
          value={profileData.phone}
          placeholder="Phone"
          class="input--tag"
        />

        <p>Address</p>

        <input
          type="text"
          name="address"
          value={profileData.address}
          placeholder="Address"
          class="input--tag"
        />

        <p>Email</p>

        <input
          type="email"
          name="email"
          value={profileData.email}
          placeholder="Email"
          class="input--tag"
        />
      </div>

      <div class="div--total">
        <h2 class="title--h2 h2--tag">Total to pay : {Number(allPrices).toFixed(2)}.- CHF</h2>
      </div>

      <div class="div--btn">
        <button type="button" on:click={() => goto('./')}>
          Register
        </button>
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
  .div--total {
    text-align: center;
    border: 1px solid #333;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);
  }
</style>