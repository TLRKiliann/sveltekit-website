<script>
  import microOne from '$lib/images/micro1.jpg';
  import microTwo from '$lib/images/micro2.jpg';
  import microThree from '$lib/images/micro3.png';
  import microFour from '$lib/images/micro4.jpg';
  import microFive from '$lib/images/micro5.jpg';
  import microSix from '$lib/images/micro6.jpg';
  import microSeven from '$lib/images/micro7.jpg';
  import microHeight from '$lib/images/micro8.jpg';

  let scroll;
  let spedd = 4;
</script>

<svelte:window bind:scrollY={scroll} />

<h1 class="class--h1">{scroll}</h1>

<div class="div--img" style:transform={`translate3d(0, $(scroll + speed)px, 0)`}>
  <img class="class--img" alt="micro 1" src={microOne} />
</div>

<div class="div--img">
  <img class="class--img" alt="micro 2" src={microTwo} />
</div>

<div class="div--img2" style:transform={`translate3d(0, $(scroll + -2)px, 0)`}>
  <img class="class--img" alt="micro 3" src={microThree} />
</div>

<div class="div--img">
  <img class="class--img" alt="micro 4" src={microFour} />
</div>

<div class="div--img">
  <img class="class--img" alt="micro 5" src={microFive} />
</div>

<div class="div--img">
  <img class="class--img" alt="micro 6" src={microSix} />
</div>

<div class="div--img">
  <img class="class--img" alt="micro 7" src={microSeven} />
</div>

<div class="div--img">
  <img class="class--img" alt="micro 8" src={microHeight} />
</div>

<style>
  .class--h1 {
    position: fixed;
    margin: 100px;
    z-index: 10;
  }
  .div--img {
    display: flex;
    width: 80%;
    margin: 6% auto;
    background: linear-gradient(30deg, slategrey, #333, #333);
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
  }
  .div--img2 {
    display: flex;
    width: 80%;
    margin: 6% auto;
    background: linear-gradient(30deg, slategrey, #333, #333);
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
  }

  .class--img {
    width: 90%;
    margin: 5% auto;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
    object-fit: cover;
  }
</style>