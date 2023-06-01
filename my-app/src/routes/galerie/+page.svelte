<script>
  import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

  import '@fontsource-variable/crimson-pro';
  import microSix from '$lib/images/micro6.jpg';
  import microFive from '$lib/images/micro5.png';
  import cpuI5 from '$lib/images/cpu_corei5.png';
  import cpuI7 from '$lib/images/cpu_corei7.png';
  import cpuI9 from '$lib/images/cpu_corei9.png';
</script>

<Parallax 
  config={{ stiffness: 1, damping: 1 }} 
  threshold={{ top: 0, bottom: 0 }} 
  sections={3}
>
  <ParallaxLayer rate={-0.4}>
    <img 
      src={microSix}
      alt="a horse"
    />
  </ParallaxLayer>

  <ParallaxLayer rate={-0.4} offset={2}>
    <img 
      src={microFive}
      alt="a bird"
    />
  </ParallaxLayer>
    <!-- Rate is 0, offset is between the two parallaxing layers above -->
  <ParallaxLayer rate={0} offset={1} style={"background: linear-gradient(30deg, slategrey, #000);"} />

  <StickyLayer offset={{ top: 1.25, bottom: 1.25 }}>
    <div style={"width: 1270px; display: flex; font-size: 1.6rem; color: orange; text-shadow: 1px 0px 1px #000;"}>
      <div style={"margin: auto; display:flex; flex-direction: column; align-items: center;"}>
        <h2>CPU Core I5</h2>
        <img alt="i5" src={cpuI5} style={"width: 400px; height: auto; border-radius: 7px; box-shadow: 0px 0px 10px #000"} />
      </div>
      <div style={"margin: auto; display:flex; flex-direction: column; align-items: center;"}>
        <h2>CPU Core I7</h2>
        <img alt="i7" src={cpuI7} style={"width: 400px; height: auto; border-radius: 7px; box-shadow: 0px 0px 10px #000"} />
      </div>
      <div style={"margin: auto; display:flex; flex-direction: column; align-items: center;"}>
        <h2>CPU Core I9</h2>
        <img alt="i9" src={cpuI9} style={"width: 400px; height: auto; border-radius: 7px; box-shadow: 0px 0px 10px #000"} />
      </div>
    </div>
  </StickyLayer>

</Parallax>
