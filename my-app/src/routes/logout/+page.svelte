<script lang="ts">
  import '@fontsource-variable/crimson-pro';
  import bg_landscape from '$lib/images/landscape1.jpg';
</script>

<div class="main--div">
  <h1 class="class-logout">
    Logout ok, see you next time !
  </h1>
  <div class="box--img">
    <img alt="" src={bg_landscape}>
  </div>

</div>

<style>
  .main--div {
    width: 100%;
    height: 90vh;
  }
  .class-logout {
    position: absolute;
    width: 80%;
    margin: 22% 10%;
    text-align: center;
    font-family: 'Crimson Pro Variable', serif;
    font-size: 3rem;
    color: #3f414d;
    z-index: 1;
  }
  .box--img {
    margin-top: 70px;
  }
  .box--img img {
    width: 100%;
    height: auto;
    opacity: 0.4;
    object-fit: cover;
  }
</style>