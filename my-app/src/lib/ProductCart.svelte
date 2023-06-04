<script lang="ts">
  import { goto, preloadCode } from '$app/navigation'
  import { get } from 'svelte/store';
  import { cartItems, addToCart, removeFromCart } from '../routes/cart.ts';
  import '@fontsource-variable/crimson-pro';

  export let product: Product = {id: '', name: '', price: 0, logo: ''};
  
  let cart = get(cartItems);

  let cartItemIndex = cart.findIndex((item) => { return item.id === product.id })
  let cartProduct = cart[cartItemIndex];
  
  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
    cartItemIndex = cart.findIndex((item) => { return item.id === product.id })
    cartProduct = cart[cartItemIndex];
  })
</script>

<div class="div--encaps">
  <div class="third--div">
    <div class="div--frame">

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
          on:click={() => addToCart(product.id, product.name, product.price, product.logo)}
        >
          +
        </button>
        
        <button class="btn--remove" on:click={() => removeFromCart(product.id)}>
          -
        </button>
      </div>
      <div class="div--btndisplay">

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
</div>

<style>
  .div--encaps {
    height: auto;
    margin: 10px;
    padding: 20px;
    background: linear-gradient(30deg, rgba(180,180,180, 0.8), slategrey, #333);
    border-radius: 7px;
    box-shadow: 0px 0px 7px #333;
  }
  .third--div {
    padding: 10px;
    background: rgba(255,255,255, 0.2);
    border-radius: 7px;
    box-shadow: 0px 0px 7px #333;
  }
  .div--frame {
    padding: 20px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background: linear-gradient(30deg, rgba(200,230,230, 0.8),
      slategrey, rgba(24,24,24, 0.9));

    border: 1px solid rgba(255,255,255, 0.2);
    border-radius: 7px;
    box-shadow: 0px 0px 10px inset #222;
  }
  .displayer--quantitiy h2 {
    width: 30px;
    margin: auto;
    padding: 7px 7px;
    text-align: center;
    background: whitesmoke;
    border-radius: 7px;
    box-shadow: 0px 0px 7px inset #000;
    color: #333;
  }
  .third--div a {
    margin: auto;
    margin-top: 10px;
  }
  .class--a {
    margin: auto;
    text-decoration: none;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: orange;
    text-shadow: 0px 0px 1px #000;
  }
  .class--a:hover {
    color: royalblue;
  }
  .third--div p {
    margin: 5px auto;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ccc;
    text-shadow: 0px 0px 1px #000;
  }
  .div--btn {
    margin: auto;
    padding: 3px 0px;
  }
  .btn--add {
    margin: 0px 10px;
    padding: 6px 10px;
    font-weight: bold;
    background: linear-gradient(30deg, rgb(25,255,255), rgba(0, 150, 255, 1));
    border: none;
    border-radius: 50%;
    color: #777;
  }
  .btn--add:hover {
    background: rgb(0, 170, 255);
    border: none;
    transform: scale(1.1);
    color: #fff;
  }
  .btn--add:active {
    background: skyblue;
    border: none;
    transform: scale(0.9);
    color: #000;
  }
  .btn--remove {
    margin: 0px 10px;
    padding: 5px 11px;
    font-size: 1.0rem;
    font-weight: bold;
    background: linear-gradient(30deg, rgb(255,250,0), rgb(255,150,0));
    border: none;
    border-radius: 50%;
    color: #777;
  }
  .btn--remove:hover {
    background: rgb(255,186,0);
    border: none;
    transform: scale(1.1);
    color: #fff;
  }
  .btn--remove:active {
    background: rgb(255,150,0);
    border: none;
    outline: none;
    transform: scale(0.9);
    color: #000;
  }
  .div--btndisplay {
    display: flex;
    height: auto;
    margin: 10px auto;
  }
  .btn--display {
    padding: 7px 10px;
    font-weight: bold;
    background: linear-gradient(30deg, #555, #333);
    border: 3px outset #777;
    box-shadow: 0px 0px 2px #777;
    border-radius: 10px;
    color: whitesmoke;
  }
  .btn--display:hover {
    margin: 3px;
    padding: 7px 8px;
    background: #333;
    border: none;
    outline: none;
    transform: scale(1.1);
    color: #ccc;
  }
  .btn--display:active {
    font-weight: normal;
    background: #333;
    border: none;
    outline: none;
    transform: scale(0.9);
    color: whitesmoke;
  }
  @media only screen and (max-width: 1450px) {
    .class--a {
      font-size: 1.4rem;
    }
  }
</style>