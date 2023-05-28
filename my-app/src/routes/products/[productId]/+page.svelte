<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import { cartItems, removeFromCart } from '../../cart.ts';
  import { get } from 'svelte/store';
  import pcware from '$lib/images/pcware.jpg';
  import logo1 from '$lib/images/cpu1.png';
  import logo2 from '$lib/images/cpu2.png';
  import logo3 from '$lib/images/cpu3.png';
  import logo4 from '$lib/images/cpu4.png';

  export let data: PageData;
  const product: Product[] = data.product;

  const { productId } = $page.params;

  let totalCarts = get(cartItems);

  let allQuantity = totalCarts.reduce((a, c) => a + c.quantity, 0);

  let allQuantityProducts = totalCarts.map((tot) => tot)

  let quantityProduct = totalCarts.find((prod) => prod.id === product.id)

  let allPrices = totalCarts.reduce((a, c) => a + (c.price * c.quantity), 0);

  const handleBack = () => {
    goto('/products')
  }

  const handleById = (productId) => {
    goto(`/products/${productId}/reviews`)
  }
</script>

<div class="main--div" data-sveltekit-reload="off">
  
  <div class="div--imgbg">
    <img alt="img bg pcware" src={pcware} class="img--pcware" />
  </div>

  <div class="flex--boxs">

    <div class="div--btn">
      <button on:click={handleBack} class="class--btn">
        Back to Products
      </button>
      <button class="class--btn" on:click={() => handleById(productId)}>
        Features
      </button>
    </div>
    
    <div class="container">

      <div class="div--border">
        <div class="div--allmerchants">
          <div class="box--product">
            <h2 class="product--name">Product name: {product.name}</h2>
            <h3>CHF : {product.price.toFixed(2)}.-</h3>
            <h3>Description : {product.description}</h3>
            <h3>
              Quantity : {quantityProduct?.quantity ? quantityProduct.quantity : '0'}x
            </h3>
          </div>

          <div class="box--logo">
            {#if product.logo === 'cpu1.png'}
              <img alt="cpu logo" src={logo1}>
            {:else if product.logo === 'cpu2.png'}
              <img alt="cpu logo" src={logo2}>
            {:else if product.logo === 'cpu3.png'}
              <img alt="cpu logo" src={logo3}>
            {:else}
              <img alt="cpu logo" src={logo4}>
            {/if}
          </div>
        </div>
      </div>

    </div>
    
    <div class="container">

      <div class="div--border2">
        <div class="class--other">
          {#each allQuantityProducts as other}
            <p class="p--name"><span>Name of product</span> : {other.name}</p>
            <p class="p--quantity"><span>Quantity</span> : {other.quantity}x</p>
            <p class="p--price"><span>CHF</span> : {other.price.toFixed(2)}.-</p>
            <hr class="hr--design" />
          {/each}
          <div class="allquantity">
            <h3>Total of products : </h3>
            <h3 class="display--right">{allQuantity}</h3>
          </div>
          <div class="allprice">
            <h2>Total price : </h2>
            <h2 class="display--right">CHF : {allPrices.toFixed(2)}.-</h2>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

<style>
  .main--div {
    width: 100%;
    min-height: 97vh;
    margin: auto;
  }
  .flex--boxs {
    width: 100%;
    min-height: 97vh;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  }
  .div--btn {
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    margin-left: 40px;
    width: 320px;
    height: 40px;
  }
  .container {
    padding: 100px 0px;
    margin: auto 20px;
    width: 44%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .div--allmerchants {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(30deg, rgba(222,232,240, 0.8),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
    color: #3f414d;
  }
  .div--allmerchants h3 {
    margin-top: 10px;
  }
  .box--product {
    display: flex;
    flex-direction: column;
  }
  .box--logo {
    display: flex;
    opacity: 0.4;
  }
  .box--logo img {
    margin: auto;
  }
  .product--name {
    margin: auto;
    color: #3f414d;
  }
  .div--border {
    padding: 20px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 7px #333;
  }
  .div--border2 {
    padding: 20px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 7px #333;
  }
  .class--other {
    padding: 20px;
    font-size: 1.0rem;
    font-weight: bold;
    color: #f8f8ff;
    background: linear-gradient(30deg, rgba(222,232,240, 0.8),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  p {
    padding: 5px 10px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 3px;
    box-shadow: 0px 0px 7px #333;
  }
  .p--name {
    text-shadow: 1px 0px 1px #333;
    color: #fff;
  }
  .p--quantity {
    text-shadow: 1px 0px 1px #333;
    color: #fff;
  }
  .p--price {
    text-shadow: 1px 0px 1px #333;
    color: #fff;
  }
  .hr--design {
    border: 1px solid #9ba6b1;
  }
  .allquantity {
    width: 100%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: slategrey;
  }
  .allprice {
    width: 100%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3f414d;
  }
  .allquantity h3 {
    width: 100%;
    margin: auto;
  }
  .allprice h2, h3 {
    width: 100%;
    margin: auto;
  }
  .display--right {
    text-align: right;
  }
</style>