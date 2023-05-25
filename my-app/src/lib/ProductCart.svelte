<script lang="ts">
  import { goto, preloadCode } from '$app/navigation'
  import { get } from 'svelte/store';
  import { cartItems, addToCart, removeFromCart } from '../routes/cart.ts';
  import '@fontsource-variable/crimson-pro';

  export let product: Product = {id: '', name: '', price: 0};
  
  let cart = get(cartItems);

  let cartItemIndex = cart.findIndex((item) => { return item.id === product.id })
  let cartProduct = cart[cartItemIndex];
  
  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
    cartItemIndex = cart.findIndex((item) => { return item.id === product.id })
    cartProduct = cart[cartItemIndex];
  })
  console.log(cart, 'cart')
</script>

<div class="div--encaps">
  <div class="third--div">
    <div class="displayer--quantitiy">
      {#if cartProduct !== undefined}
        <h2>{cartProduct.quantity}</h2>
      {/if}
    </div>

    <a href={`/products/${product.id}`} class="class--a">
      {product.name}
    </a> 
    
    <p>CHF : {product.price.toFixed(2)}.-</p>

    <div class="div--btn">
      <button 
        class="btn--add" 
        on:click={() => addToCart(product.id, product.name, product.price)}
      >
        +
      </button>
      
      <button class="btn--remove" on:click={() => removeFromCart(product.id)}>
        -
      </button>
    </div>
    <div class="div--btn">

      <button class="btn--display"
        on:focus={async () => {
          await preloadCode(`/products/${product.id}`) 
        }}
        on:mouseover={async () => {
          await preloadCode(`/products/${product.id}`)
        }}
        on:click={() => goto(`/products/${product.id}`)}
      >
        Display product
      </button>

    </div>
  </div>
</div>

<style>
  .div--encaps {
    height: auto;
    margin: 8px 8px;
    padding: 14px 14px;
    background: linear-gradient(30deg, slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .third--div {
    height: 160px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(30deg, #f8f8ff, #dee8f0);
    border-radius: 7px;
    box-shadow: 0px 0px 10px #333;
  }
  .displayer--quantitiy h2 {
    width: 30px;
    margin: auto;
    padding: 10px 10px;
    text-align: center;
    background: #f8f8ff;
    border-radius: 7px;
    box-shadow: 0px 0px 7px slategrey;
    color: #333;
  }
  .third--div a {
    margin: auto;
    margin-top: 10px;
  }
  .class--a {
    text-decoration: none;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3f414d;;
  }
  .class--a:hover {
    color: royalblue;
  }
  .third--div p {
    margin: auto;
    margin-top: 7px;
    font-size: 1.1rem;
    font-weight: bold;
    color: slategrey;
  }
  .div--btn {
    margin: auto;
    margin-top: 10px;
  }
  .btn--add {
    margin: 0px 10px;
    padding: 6px 10px;
    font-weight: bold;
    background: dodgerblue;
    border: 1px solid dodgerblue;
    border-radius: 50%;
    color: #fff;
  }
  .btn--add:hover {
    background: royalblue;
    border: 1px solid royalblue;
  }
  .btn--add:active {
    background: royalblue;
    border: 1px solid #f8f8ff;
  }
  .btn--remove {
    margin: 0px 10px;
    padding: 5px 11px;
    font-size: 1.0rem;
    font-weight: bold;
    background: orange;
    border: 1px solid orange;
    border-radius: 50%;
    color: #fff;
  }
  .btn--remove:hover {
    background: orangered;
    border: 1px solid orangered;
  }
  .btn--remove:active {
    background: orangered;
    border: 1px solid #f8f8ff;
  }
  .btn--display {
    margin: 0px 5px;
    padding: 5px 10px;
    font-weight: bold;
    background: linear-gradient(30deg, slategrey, #333);
    border: 1px solid slategrey;
    box-shadow: 0px 0px 4px #333;
    border-radius: 7px;
    color: #f8f8ff;
  }
  .btn--display:hover {
    background: #333;
    border: 1px solid royalblue;
    box-shadow: 0px 0px 0px #333;
    color: #ccc;
  }
  .btn--display:active {
    background: slategrey;
    border: 1px solid #f8f8ff;
    color: #f8f8ff;
  }
</style>