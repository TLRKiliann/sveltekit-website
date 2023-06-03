<script>
  import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';
  import { fly } from 'svelte/transition';

  import '@fontsource-variable/crimson-pro';
  import microSix from '$lib/images/micro6.jpg';
  import microFive from '$lib/images/micro5.png';
  import cpuI5 from '$lib/images/cpu_corei5.png';
  import cpuI7 from '$lib/images/cpu_corei7.png';
  import cpuI9 from '$lib/images/cpu_corei9.png';
</script>


<section   in:fly={{ duration:500 }} out:fly={{ duration:500 }}>
  <Parallax 
    config={{ y: 0, stiffness: 1, damping: 1 }} 
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

    <StickyLayer offset={{ top: 0.75, bottom: 0.75 }}>
      <h2 style={"margin-left: 20px; color: orange;"}>Micro-Proc</h2>
      <h2 style={"margin-left: 20px; color: orange;"}>are specialists in high-tech products</h2>
    </StickyLayer>

    <StickyLayer offset={{ top: 1.25, bottom: 1.25 }}>
      <div style={"width: 1270px; display: flex;"}>
        <div style={"margin: auto; display:flex; flex-direction: column; align-items: center;"}>
          <h2 style={"font-size: 1.6rem; color: orange; text-shadow: 1px 0px 1px #000;"}>CPU Core I5</h2>
          <img alt="i5" src={cpuI5} style={"width: 350px; height: auto; border-radius: 7px; box-shadow: 0px 0px 10px #333;"} />
          <legend style={"margin-top: 10px; font-size: 1.0rem; color: whitesmoke;"}>Sockets: 1155</legend>
        </div>
        <div style={"margin: auto; display:flex; flex-direction: column; align-items: center;"}>
          <h2 style={"font-size: 1.6rem; color: orange; text-shadow: 1px 0px 1px #000;"}>CPU Core I7</h2>
          <img alt="i7" src={cpuI7} style={"width: 350px; height: auto; border-radius: 7px; box-shadow: 0px 0px 10px #222;"} />
          <legend style={"margin-top: 10px; font-size: 1.0rem; color: whitesmoke;"}>Sockets: 1155</legend>
        </div>
        <div style={"margin: auto; display:flex; flex-direction: column; align-items: center;"}>
          <h2 style={"font-size: 1.6rem; color: orange; text-shadow: 1px 0px 1px #000;"}>CPU Core I9</h2>
          <img alt="i9" src={cpuI9} style={"width: 350px; height: auto; border-radius: 7px; box-shadow: 0px 0px 10px #000;"} />
          <legend style={"margin-top: 10px; font-size: 1.0rem; color: whitesmoke;"}>Sockets: FCLGA2066</legend>
        </div>
      </div>
    </StickyLayer>

    <StickyLayer offset={{ top: 2.60, bottom: 1.25 }}>
      <h2 style={"margin-left: 20px; color: orange;"}>CPU for Gaming</h2>
      <p style={"margin-left: 20px; color: orange;"}>High performance</p>
    </StickyLayer>

  </Parallax>
</section>