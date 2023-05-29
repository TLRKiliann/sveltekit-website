<script>
  import '@fontsource-variable/crimson-pro';
  import microOne from '$lib/images/micro1.png';
  import microTwo from '$lib/images/micro6.jpg';
  import microThree from '$lib/images/micro5.png';
  import microFour from '$lib/images/micro7.jpg';
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

    <div id="slide1">
      <div class="slide_inside">
        <h1>Last CPU Core I5</h1>
      </div>
    </div>

    <div id="slide2">
      <div class="slide_inside">
        <h1>CPU Core I7</h1>
      </div>
    </div>

    <div id="slide3">
      <div class="slide_inside">
        <h1>CPU Core I9</h1>
        <p>For gaming</p>
      </div>
    </div>

    <div id="slide4">
      <div class="slide_inside">
      </div>
    </div>

  </div>
</div>

<style>
  .class--overflow {
    position: fixed;
    padding: 0px;
    margin: 0px;
    background: #000;
    box-sizing: border-box;
    overflow: hidden;

    z-index: -2;
  }
  #wrap {
    position: relative;
    top: 0px;
    transition: top 1.4s cubic-bezier(.49,.22,.52,1.35);
  }
  #nav {
    position: fixed;
    top: 54px;
    left: 0px;
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    background: #dee8f0;

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

  /*Si on en touche 1 ça déguille tout !!!*/
  #slide1, #slide2, #slide3, #slide4 {
    height: 920px;
    padding-top: 50px;
    transition: background-position 1.4s cubic-bezier(.49,.22,.52,1.35);
    -webkit-transition: top 1.4s cubic-bezier(.49,.22,.52,1);
  }

  #slide1 { background: url($lib/images/cpu_corei5.png) center 0 no-repeat fixed; }
  #slide2 { background: url($lib/images/cpu_corei7.png) center 0 no-repeat fixed; }
  #slide3 { background: url($lib/images/cpu_corei9.png) center 0 no-repeat fixed; }
  #slide4 { background: url($lib/images/micro5.png) center 0 no-repeat fixed; }

  /* Slide Content */
  .slide_inside {
    width: 1400px;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, .6);
    padding: 20px 0px;
  }

  #slide1 .slide_inside {
    width: 400px;
    margin-top: 550px;
    margin-left: 30px;
    text-align: center;
    background: linear-gradient(30deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
    border-radius: 20px;
    box-shadow: 0px 0px 4px #fff;
    color: sandybrown;
  }

  #slide2 .slide_inside {
    width: 400px;
    margin-top: 600px;
    margin-left: 30px;
    text-align: center;
    background: linear-gradient(30deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
    border-radius: 20px;
    box-shadow: 0px 0px 4px #fff;
    color: sandybrown;
  }

  #s2:target ~ #wrap {
    top: -1000px;
  }

  #slide3 .slide_inside {
    width: 400px;
    margin-top: 650px;
    margin-left: 30px;
    text-align: center;
    background: linear-gradient(30deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
    border-radius: 20px;
    box-shadow: 0px 0px 4px #fff;
    color: sandybrown;
  }

  #slide4 .slide_inside {
    display: flex;
  }

  #s2:target ~ #wrap #slide1 { background-position: 50% 36%; }
  #s2:target ~ #wrap #slide2 { background-position: 50% 0%; }
  #s2:target ~ #wrap #slide3 { background-position: 50% -30%; }
  #s2:target ~ #wrap #slide4 { background-position: 50% -50%; }

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

  #s3:target ~ #wrap { top:-2050px; }
  #s3:target ~ #wrap #nav li:nth-child(3) a { 
    color: yellow;
    text-shadow: 0 0 10px orangered, 0 0 10px orangered;
  }
  #s3:target ~ #wrap #slide1 { background-position: 50% 60%; }
  #s3:target ~ #wrap #slide2 { background-position: 50% 35%; }
  #s3:target ~ #wrap #slide3 { background-position: 50% 0%; }
  #s3:target ~ #wrap #slide4 { background-position: 50% -35%; }
  
  #s4:target ~ #wrap { top:-3050px; }
  #s4:target ~ #wrap #nav li:last-child a { 
    color: yellow;
    text-shadow: 0 0 10px orangered, 0 0 10px orangered;
  }
  #s4:target ~ #wrap #slide1 { background-position: 50% 50%; }
  #s4:target ~ #wrap #slide2 { background-position: 50% 50%; }
  #s4:target ~ #wrap #slide3 { background-position: 50% 50%; }
  #s4:target ~ #wrap #slide4 { background-position: 50% 50%; }
</style>