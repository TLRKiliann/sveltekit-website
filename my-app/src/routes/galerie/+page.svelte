<script>
  import '@fontsource-variable/crimson-pro';
  import microOne from '$lib/images/micro1.jpg';
  import microTwo from '$lib/images/micro6.jpg';
  import microThree from '$lib/images/micro3.png';
  import microFour from '$lib/images/micro7.jpg';
  import landscapebg from '$lib/images/landscape2.jpg';
  import imgAnim1 from '$lib/images/koala_tree.png';
</script>

<div class="class--overflow">

<span id="s1"></span>
<span id="s2"></span>
<span id="s3"></span>
<span id="s4"></span>

  <div id="wrap">

    <ul id="nav">
      <li><a href="#s1">microship 1</a></li>
      <li><a href="#s2">microship 2</a></li>
      <li><a href="#s3">microship 3</a></li>
      <li><a href="#s4">microship 4</a></li>
    </ul>
   
    <div class="box--img">
      <img alt="landscape img" src={landscapebg} />
    </div>

    <div id="slide1">
      <div class="slide_inside">
        <img class="class--img1" alt="micro 1" src={microOne} />
      </div>
    </div>

    <div id="slide2">
      <div class="slide_inside">
        <img class="class--img2" alt="micro 2" src={microTwo} />
      </div>
    </div>

    <div id="slide3">
      <div class="slide_inside">
        <img class="class--img3" alt="micro 3" src={microThree} />
      </div>
    </div>

    <div id="slide4">
      <div class="slide_inside">
        <img class="class--img4" alt="micro 4" src={microFour} />
      </div>
    </div>

  </div>
</div>

<style>
  .class--overflow {
    position: fixed;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    overflow: hidden;
    z-index: -2;
  }
  #wrap {
    position: relative;
    top: 0px;
    transition: top 1.4s cubic-bezier(.49,.22,.52,1.35);
    border: 1px solid orange;
  }
  #nav {
    position: fixed;
    top: 54px;
    left: 0px;
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    background: #dee8f0;

    border: 1px solid orange;

    border-radius: 0px 0px 7px 0px;
    box-shadow: 0px 0px 10px #333;
    z-index: 10;
  }
  #nav a {
    width: 100px;
    margin: 5px 0px;
    text-decoration: none;
    color: #333;
  }
  .box--img {
    position: fixed;
    top: 70px;
    width: 100%;
    height: 100%;
    margin: auto;
    background: linear-gradient(30deg, rgba(222,232,240, 0.6),
      rgba(222,232,240, 0.9), rgba(222,232,240, 0.9));
    z-index: -3;
  }

  .box--img img {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    object-fit: cover;
  }
  
  .class--img1 {
    width: 80%;
    height: auto;
    border-radius: 50px;
    box-shadow: 0px 0px 10px #333;
    opacity: 0.85;

    border: 1px solid #fff;
  }
  .class--img2 {
    width: 80%;
    text-align: center;
    border-radius: 50px;
    box-shadow: 0px 0px 10px #333;
    opacity: 0.85;

    border: 1px solid #fff;
  }
  .class--img3 {
    margin: 10% 10%;
    width: 80%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #333;
    opacity: 0.90;
  }
  .class--img4 {
    margin: 0% 10%;
    width: 80%;
    border-radius: 50px;
    box-shadow: 0px 0px 10px #333;
    opacity: 0.85;
  }

  #slide1, #slide2, #slide3, #slide4 {
    width: 100%;
    height: 1100px;
    padding-top: 100px;
    transition: background-position 1.4s cubic-bezier(.49,.22,.52,1.35);
    -webkit-transition: top 1.4s cubic-bezier(.49,.22,.52,1);
  }
   
  #slide1 { background: center 0 no-repeat fixed; }
  #slide2 { background: center 0 no-repeat fixed; }
  #slide3 { background: center 0 no-repeat fixed; margin-top: -300px; }
  #slide4 { background: center 0 no-repeat fixed; margin-top: -50px; }

  /* Contenus des slides */
  .slide_inside {
    position: relative;
    width: 100%;
    margin: auto;
    padding: 50px 0px;
    background-color: rgba(0, 0, 0, .6);
  }

  #slide1 .slide_inside {
    margin: -50px auto;
    text-align: center;
    background-color: rgba(0, 0, 0, .6);
  }

  #slide2 .slide_inside {
    margin-top: -80px;
  }

  #slide3 .slide_inside {
    margin-top: -100px;
  }

  #s2:target ~ #wrap {
    top: -1150px;
  }
 
  #s2:target ~ #wrap #slide1 { background-position: 50% 36%; }
  #s2:target ~ #wrap #slide2 { background-position: 50% 0%; }
  #s2:target ~ #wrap #slide3 { background-position: 50% -30%; }
  #s2:target ~ #wrap #slide4 { background-position: 50% 50%; }

  #s2:target ~ #wrap #nav li:first-child + li a {
    color: yellow; text-shadow: 0 0 10px orangered, 0 0 10px orangered;
  }

  #s1:target ~ #wrap { top:0px; }
  #s1:target ~ #wrap #nav li:first-child a { 
    color: yellow;
    text-shadow: 0 0 10px orangered, 0 0 10px orangered;
  }
  #s1:target ~ #wrap #slide1 { background-position: 50% 0%; }
  #s1:target ~ #wrap #slide2 { background-position: 50% -35%; }
  #s1:target ~ #wrap #slide3 { background-position: 50% -60%; }
  #s1:target ~ #wrap #slide4 { background-position: 50% 0%; }

  #s3:target ~ #wrap { top:-2150px; }
  #s3:target ~ #wrap #nav li:nth-child(3) a { 
    color: yellow;
    text-shadow: 0 0 10px orangered, 0 0 10px orangered;
  }
  #s3:target ~ #wrap #slide1 { background-position: 50% 60%; }
  #s3:target ~ #wrap #slide2 { background-position: 50% 35%; }
  #s3:target ~ #wrap #slide3 { background-position: 50% 0%; }
  #s3:target ~ #wrap #slide4 { background-position: 50% 0%; }
  
  #s4:target ~ #wrap { top:-3250px; }
  #s4:target ~ #wrap #nav li:last-child a { 
    color: yellow;
    text-shadow: 0 0 10px orangered, 0 0 10px orangered;
  }
  #s4:target ~ #wrap #slide1 { background-position: 50% 50%; }
  #s4:target ~ #wrap #slide2 { background-position: 50% 0%; }
  #s4:target ~ #wrap #slide3 { background-position: 50% 0%; }
  #s4:target ~ #wrap #slide4 { background-position: 50% 0%; }
</style>